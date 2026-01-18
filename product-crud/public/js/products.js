// ===== PRODUCT PAGE HTML TEMPLATE =====
function getProductsHTML() {
    return `
        <!-- Header -->
        <header class="header-gradient">
            <div class="container py-4">
                <div class="row align-items-center mb-4">
                    <div class="col">
                        <h1 class="text-white mb-0">
                            <i class="bi bi-box-seam me-2"></i>
                            Product Management
                        </h1>
                        <p class="text-white-50 mb-0">Manage your inventory efficiently</p>
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-light btn-lg" onclick="openAddProductModal()">
                            <i class="bi bi-plus-circle me-2"></i>
                            Add New Product
                        </button>
                    </div>
                </div>

                <!-- Statistics Cards -->
                <div class="row g-3">
                    <div class="col-md-3">
                        <div class="stat-card">
                            <div class="stat-icon bg-primary">
                                <i class="bi bi-box"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-label">Total Products</div>
                                <div class="stat-value" id="totalProducts">0</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="stat-card">
                            <div class="stat-icon bg-success">
                                <i class="bi bi-check-circle"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-label">Active Products</div>
                                <div class="stat-value" id="activeProducts">0</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="stat-card">
                            <div class="stat-icon bg-warning">
                                <i class="bi bi-box-seam"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-label">Total Stock</div>
                                <div class="stat-value" id="totalStock">0</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="stat-card">
                            <div class="stat-icon bg-info">
                                <i class="bi bi-currency-dollar"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-label">Total Value</div>
                                <div class="stat-value" id="totalValue">$0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="container my-5">
            <div class="card shadow-sm">
                <div class="card-header bg-white py-3">
                    <div class="row align-items-center">
                        <div class="col">
                            <h5 class="mb-0">Product List</h5>
                        </div>
                        <div class="col-auto">
                            <div class="input-group">
                                <span class="input-group-text bg-white border-end-0">
                                    <i class="bi bi-search"></i>
                                </span>
                                <input
                                    type="text"
                                    class="form-control border-start-0"
                                    placeholder="Search products..."
                                    id="searchProductInput"
                                    onkeyup="handleProductSearch()"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table table-hover mb-0">
                            <thead class="table-light">
                                <tr>
                                    <th width="80">Image</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th width="120">Price</th>
                                    <th width="100">Stock</th>
                                    <th width="100">Status</th>
                                    <th width="150" class="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody id="productTableBody">
                                <tr>
                                    <td colspan="7" class="text-center py-5 text-muted">
                                        <i class="bi bi-inbox fs-1 d-block mb-2"></i>
                                        No products found. Click "Add New Product" to get started.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>

        <!-- Modal: Add/Edit Product -->
        <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title" id="productModalLabel">
                            <i class="bi bi-plus-circle me-2"></i>
                            Add New Product
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form id="productForm">
                            <input type="hidden" id="productId" />

                            <div class="row g-3">
                                <div class="col-md-8">
                                    <div class="mb-3">
                                        <label for="productName" class="form-label">Product Name <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="productName" required />
                                    </div>

                                    <div class="mb-3">
                                        <label for="productDescription" class="form-label">Description</label>
                                        <textarea class="form-control" id="productDescription" rows="3"></textarea>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="productPrice" class="form-label">Price ($) <span class="text-danger">*</span></label>
                                            <input type="number" class="form-control" id="productPrice" step="0.01" min="0" required />
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="productStock" class="form-label">Stock <span class="text-danger">*</span></label>
                                            <input type="number" class="form-control" id="productStock" min="0" required />
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <label for="productCategory" class="form-label">Category</label>
                                        <select class="form-select" id="productCategory">
                                            <option value="">Select category...</option>
                                            <option value="Electronics">Electronics</option>
                                            <option value="Fashion">Fashion</option>
                                            <option value="Home & Garden">Home & Garden</option>
                                            <option value="Sports">Sports</option>
                                            <option value="Books">Books</option>
                                            <option value="Toys">Toys</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <label class="form-label">Product Image</label>
                                    <div class="image-upload-container">
                                        <div class="image-preview" id="productImagePreview">
                                            <i class="bi bi-image"></i>
                                            <p>No image selected</p>
                                        </div>
                                        <input type="file" class="form-control mt-2" id="productImage" accept="image/*" onchange="previewProductImage(event)" />
                                        <small class="text-muted d-block mt-1">Max 5MB (jpg, png, gif, webp)</small>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="saveProduct()">
                            <i class="bi bi-save me-2"></i>Save Product
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Offcanvas: Product Detail -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="productDetailOffcanvas" aria-labelledby="productDetailLabel">
            <div class="offcanvas-header bg-primary text-white">
                <h5 class="offcanvas-title" id="productDetailLabel">
                    <i class="bi bi-info-circle me-2"></i>
                    Product Details
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div id="productDetailContent">
                    <!-- Content will be dynamically loaded -->
                </div>
            </div>
        </div>
    `;
}

// ===== PRODUCT STATE =====
let products = [];
let currentEditProductId = null;
let productModal;
let productDetailOffcanvas;

// ===== PRODUCT INITIALIZATION =====
function initProducts() {
    // Initialize Bootstrap components
    productModal = new bootstrap.Modal(document.getElementById('productModal'));
    productDetailOffcanvas = new bootstrap.Offcanvas(document.getElementById('productDetailOffcanvas'));
    
    // Load products
    fetchProducts();
}

// ===== PRODUCT API FUNCTIONS =====
async function fetchProducts() {
    try {
        showLoading();
        const response = await fetch(`${API_BASE_URL}/products`);
        const data = await response.json();
        
        if (data.success) {
            products = data.data;
            renderProductTable();
            updateProductStatistics();
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
            resetProductForm();
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
            resetProductForm();
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

// ===== PRODUCT RENDER FUNCTIONS =====
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
                <button class="btn btn-sm btn-outline-primary me-1" onclick="openEditProductModal('${product.id}')" title="Edit">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger" onclick="deleteProduct('${product.id}', '${product.name}')" title="Delete">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function updateProductStatistics() {
    const totalProducts = products.length;
    const activeProducts = products.filter(p => p.isActive).length;
    const totalStock = products.reduce((sum, p) => sum + parseInt(p.stock), 0);
    const totalValue = products.reduce((sum, p) => sum + (parseFloat(p.price) * parseInt(p.stock)), 0);
    
    document.getElementById('totalProducts').textContent = totalProducts;
    document.getElementById('activeProducts').textContent = activeProducts;
    document.getElementById('totalStock').textContent = totalStock.toLocaleString();
    document.getElementById('totalValue').textContent = formatCurrency(totalValue);
}

// ===== PRODUCT MODAL FUNCTIONS =====
function openAddProductModal() {
    currentEditProductId = null;
    resetProductForm();
    document.getElementById('productModalLabel').innerHTML = '<i class="bi bi-plus-circle me-2"></i>Add New Product';
    productModal.show();
}

function openEditProductModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    
    currentEditProductId = id;
    
    // Populate form
    document.getElementById('productId').value = product.id;
    document.getElementById('productName').value = product.name;
    document.getElementById('productDescription').value = product.description || '';
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productStock').value = product.stock;
    document.getElementById('productCategory').value = product.category || '';
    
    // Show existing image
    if (product.imageUrl) {
        const preview = document.getElementById('productImagePreview');
        preview.innerHTML = `<img src="${product.imageUrl}" alt="${product.name}">`;
    }
    
    document.getElementById('productModalLabel').innerHTML = '<i class="bi bi-pencil me-2"></i>Edit Product';
    productModal.show();
}

function resetProductForm() {
    document.getElementById('productForm').reset();
    document.getElementById('productId').value = '';
    currentEditProductId = null;
    
    // Reset image preview
    const preview = document.getElementById('productImagePreview');
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
    if (currentEditProductId) {
        updateProduct(currentEditProductId, formData);
    } else {
        createProduct(formData);
    }
}

// ===== PRODUCT IMAGE PREVIEW =====
function previewProductImage(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('productImagePreview');
    
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

// ===== PRODUCT DETAIL VIEW =====
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
            <button class="btn btn-primary" onclick="productDetailOffcanvas.hide(); openEditProductModal('${product.id}');">
                <i class="bi bi-pencil me-2"></i>Edit Product
            </button>
            <button class="btn btn-outline-danger" onclick="productDetailOffcanvas.hide(); deleteProduct('${product.id}', '${product.name}');">
                <i class="bi bi-trash me-2"></i>Delete Product
            </button>
        </div>
    `;
    
    productDetailOffcanvas.show();
}

// ===== PRODUCT SEARCH FUNCTION =====
function handleProductSearch() {
    const searchTerm = document.getElementById('searchProductInput').value.toLowerCase();
    
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
