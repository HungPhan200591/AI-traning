// ===== CONFIGURATION =====
const API_BASE_URL = 'http://localhost:8998/api';
let products = [];
let currentEditId = null;

// ===== BOOTSTRAP INSTANCES =====
let productModal;
let productDetailOffcanvas;
let toastNotification;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Bootstrap components
    productModal = new bootstrap.Modal(document.getElementById('productModal'));
    productDetailOffcanvas = new bootstrap.Offcanvas(document.getElementById('productDetailOffcanvas'));
    toastNotification = new bootstrap.Toast(document.getElementById('toastNotification'));
    
    // Load products on page load
    fetchProducts();
});

// ===== UTILITY FUNCTIONS =====
function showLoading() {
    document.getElementById('loadingOverlay').classList.add('active');
}

function hideLoading() {
    document.getElementById('loadingOverlay').classList.remove('active');
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toastNotification');
    const toastMessage = document.getElementById('toastMessage');
    
    // Remove previous classes
    toast.classList.remove('bg-success', 'bg-danger', 'text-white');
    
    // Add new classes
    toast.classList.add(`bg-${type}`, 'text-white');
    toastMessage.textContent = message;
    
    toastNotification.show();
}

function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(value);
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// ===== API FUNCTIONS =====
async function fetchProducts() {
    try {
        showLoading();
        const response = await fetch(`${API_BASE_URL}/products`);
        const data = await response.json();
        
        if (data.success) {
            products = data.data;
            renderProductTable();
            updateStatistics();
        } else {
            showToast('Failed to load products', 'danger');
        }
    } catch (error) {
        console.error('Error fetching products:', error);
        showToast('Error loading products', 'danger');
    } finally {
        hideLoading();
    }
}

async function createProduct(formData) {
    try {
        showLoading();
        const response = await fetch(`${API_BASE_URL}/products`, {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            showToast('Product created successfully!', 'success');
            productModal.hide();
            resetForm();
            await fetchProducts();
        } else {
            showToast(data.message || 'Failed to create product', 'danger');
        }
    } catch (error) {
        console.error('Error creating product:', error);
        showToast('Error creating product', 'danger');
    } finally {
        hideLoading();
    }
}

async function updateProduct(id, formData) {
    try {
        showLoading();
        const response = await fetch(`${API_BASE_URL}/products/${id}`, {
            method: 'PUT',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            showToast('Product updated successfully!', 'success');
            productModal.hide();
            resetForm();
            await fetchProducts();
        } else {
            showToast(data.message || 'Failed to update product', 'danger');
        }
    } catch (error) {
        console.error('Error updating product:', error);
        showToast('Error updating product', 'danger');
    } finally {
        hideLoading();
    }
}

async function deleteProduct(id, name) {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) {
        return;
    }
    
    try {
        showLoading();
        const response = await fetch(`${API_BASE_URL}/products/${id}`, {
            method: 'DELETE'
        });
        
        const data = await response.json();
        
        if (data.success) {
            showToast('Product deleted successfully!', 'success');
            await fetchProducts();
        } else {
            showToast(data.message || 'Failed to delete product', 'danger');
        }
    } catch (error) {
        console.error('Error deleting product:', error);
        showToast('Error deleting product', 'danger');
    } finally {
        hideLoading();
    }
}

// ===== RENDER FUNCTIONS =====
function renderProductTable() {
    const tbody = document.getElementById('productTableBody');
    
    if (products.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" class="text-center py-5 text-muted">
                    <i class="bi bi-inbox fs-1 d-block mb-2"></i>
                    No products found. Click "Add New Product" to get started.
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = products.map(product => `
        <tr class="fade-in">
            <td>
                ${product.imageUrl 
                    ? `<img src="${product.imageUrl}" alt="${product.name}" class="product-thumbnail">` 
                    : `<div class="product-thumbnail d-flex align-items-center justify-content-center bg-light">
                        <i class="bi bi-image text-muted"></i>
                       </div>`
                }
            </td>
            <td>
                <a href="#" class="product-name" onclick="showProductDetail('${product.id}'); return false;">
                    ${product.name}
                </a>
            </td>
            <td>
                ${product.category 
                    ? `<span class="badge bg-secondary">${product.category}</span>` 
                    : '<span class="text-muted">-</span>'
                }
            </td>
            <td><strong>${formatCurrency(product.price)}</strong></td>
            <td>
                <span class="badge ${product.stock > 10 ? 'bg-success' : product.stock > 0 ? 'bg-warning' : 'bg-danger'}">
                    ${product.stock}
                </span>
            </td>
            <td>
                <span class="badge ${product.isActive ? 'bg-success' : 'bg-secondary'}">
                    ${product.isActive ? 'Active' : 'Inactive'}
                </span>
            </td>
            <td class="text-center">
                <button class="btn btn-sm btn-outline-primary me-1" onclick="openEditModal('${product.id}')" title="Edit">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger" onclick="deleteProduct('${product.id}', '${product.name}')" title="Delete">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function updateStatistics() {
    const totalProducts = products.length;
    const activeProducts = products.filter(p => p.isActive).length;
    const totalStock = products.reduce((sum, p) => sum + parseInt(p.stock), 0);
    const totalValue = products.reduce((sum, p) => sum + (parseFloat(p.price) * parseInt(p.stock)), 0);
    
    document.getElementById('totalProducts').textContent = totalProducts;
    document.getElementById('activeProducts').textContent = activeProducts;
    document.getElementById('totalStock').textContent = totalStock.toLocaleString();
    document.getElementById('totalValue').textContent = formatCurrency(totalValue);
}

// ===== MODAL FUNCTIONS =====
function openAddModal() {
    currentEditId = null;
    resetForm();
    document.getElementById('productModalLabel').innerHTML = '<i class="bi bi-plus-circle me-2"></i>Add New Product';
    productModal.show();
}

function openEditModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    
    currentEditId = id;
    
    // Populate form
    document.getElementById('productId').value = product.id;
    document.getElementById('productName').value = product.name;
    document.getElementById('productDescription').value = product.description || '';
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productStock').value = product.stock;
    document.getElementById('productCategory').value = product.category || '';
    
    // Show existing image
    if (product.imageUrl) {
        const preview = document.getElementById('imagePreview');
        preview.innerHTML = `<img src="${product.imageUrl}" alt="${product.name}">`;
    }
    
    document.getElementById('productModalLabel').innerHTML = '<i class="bi bi-pencil me-2"></i>Edit Product';
    productModal.show();
}

function resetForm() {
    document.getElementById('productForm').reset();
    document.getElementById('productId').value = '';
    currentEditId = null;
    
    // Reset image preview
    const preview = document.getElementById('imagePreview');
    preview.innerHTML = `
        <i class="bi bi-image"></i>
        <p>No image selected</p>
    `;
}

function saveProduct() {
    const form = document.getElementById('productForm');
    
    // Validate form
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Create FormData
    const formData = new FormData();
    formData.append('name', document.getElementById('productName').value);
    formData.append('description', document.getElementById('productDescription').value);
    formData.append('price', document.getElementById('productPrice').value);
    formData.append('stock', document.getElementById('productStock').value);
    formData.append('category', document.getElementById('productCategory').value);
    
    // Add image if selected
    const imageFile = document.getElementById('productImage').files[0];
    if (imageFile) {
        formData.append('image', imageFile);
    }
    
    // Create or update
    if (currentEditId) {
        updateProduct(currentEditId, formData);
    } else {
        createProduct(formData);
    }
}

// ===== IMAGE PREVIEW =====
function previewImage(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('imagePreview');
    
    if (file) {
        // Validate file size (5MB)
        if (file.size > 5 * 1024 * 1024) {
            showToast('Image size must be less than 5MB', 'danger');
            event.target.value = '';
            return;
        }
        
        // Validate file type
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
        if (!validTypes.includes(file.type)) {
            showToast('Only image files are allowed (jpg, png, gif, webp)', 'danger');
            event.target.value = '';
            return;
        }
        
        // Show preview
        const reader = new FileReader();
        reader.onload = (e) => {
            preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
        };
        reader.readAsDataURL(file);
    }
}

// ===== OFFCANVAS DETAIL VIEW =====
function showProductDetail(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    
    const content = document.getElementById('productDetailContent');
    content.innerHTML = `
        ${product.imageUrl 
            ? `<img src="${product.imageUrl}" alt="${product.name}" class="product-detail-image">` 
            : `<div class="product-detail-image d-flex align-items-center justify-content-center bg-light">
                <i class="bi bi-image fs-1 text-muted"></i>
               </div>`
        }
        
        <h4 class="mb-3">${product.name}</h4>
        
        ${product.description 
            ? `<div class="detail-item">
                <div class="detail-label">Description</div>
                <div class="detail-value">${product.description}</div>
               </div>` 
            : ''
        }
        
        <div class="detail-item">
            <div class="detail-label">Price</div>
            <div class="detail-value text-primary">${formatCurrency(product.price)}</div>
        </div>
        
        <div class="detail-item">
            <div class="detail-label">Stock Quantity</div>
            <div class="detail-value">${product.stock} units</div>
        </div>
        
        ${product.category 
            ? `<div class="detail-item">
                <div class="detail-label">Category</div>
                <div class="detail-value">${product.category}</div>
               </div>` 
            : ''
        }
        
        <div class="detail-item">
            <div class="detail-label">Status</div>
            <div class="detail-value">
                <span class="badge ${product.isActive ? 'bg-success' : 'bg-secondary'}">
                    ${product.isActive ? 'Active' : 'Inactive'}
                </span>
            </div>
        </div>
        
        <div class="detail-item">
            <div class="detail-label">Created At</div>
            <div class="detail-value">${formatDate(product.createdAt)}</div>
        </div>
        
        <div class="detail-item">
            <div class="detail-label">Last Updated</div>
            <div class="detail-value">${formatDate(product.updatedAt)}</div>
        </div>
        
        <div class="d-grid gap-2 mt-4">
            <button class="btn btn-primary" onclick="productDetailOffcanvas.hide(); openEditModal('${product.id}');">
                <i class="bi bi-pencil me-2"></i>Edit Product
            </button>
            <button class="btn btn-outline-danger" onclick="productDetailOffcanvas.hide(); deleteProduct('${product.id}', '${product.name}');">
                <i class="bi bi-trash me-2"></i>Delete Product
            </button>
        </div>
    `;
    
    productDetailOffcanvas.show();
}

// ===== SEARCH FUNCTION =====
function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (!searchTerm) {
        renderProductTable();
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        (product.category && product.category.toLowerCase().includes(searchTerm)) ||
        (product.description && product.description.toLowerCase().includes(searchTerm))
    );
    
    const tbody = document.getElementById('productTableBody');
    
    if (filteredProducts.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" class="text-center py-5 text-muted">
                    <i class="bi bi-search fs-1 d-block mb-2"></i>
                    No products found matching "${searchTerm}"
                </td>
            </tr>
        `;
        return;
    }
    
    // Temporarily replace products array for rendering
    const originalProducts = products;
    products = filteredProducts;
    renderProductTable();
    products = originalProducts;
}
