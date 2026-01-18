// ===== CUSTOMER PAGE HTML TEMPLATE =====
function getCustomersHTML() {
    return `
        <!-- Header -->
        <header class="header-gradient">
            <div class="container py-4">
                <div class="row align-items-center mb-4">
                    <div class="col">
                        <h1 class="text-white mb-0">
                            <i class="bi bi-people me-2"></i>
                            Customer Management
                        </h1>
                        <p class="text-white-50 mb-0">Manage your customer relationships</p>
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-light btn-lg" onclick="openAddCustomerModal()">
                            <i class="bi bi-person-plus me-2"></i>
                            Add New Customer
                        </button>
                    </div>
                </div>

                <!-- Statistics Cards -->
                <div class="row g-3">
                    <div class="col-md-3">
                        <div class="stat-card">
                            <div class="stat-icon bg-success">
                                <i class="bi bi-people"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-label">Total Customers</div>
                                <div class="stat-value" id="totalCustomers">0</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="stat-card">
                            <div class="stat-icon bg-primary">
                                <i class="bi bi-check-circle"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-label">Active Customers</div>
                                <div class="stat-value" id="activeCustomers">0</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="stat-card">
                            <div class="stat-icon bg-warning">
                                <i class="bi bi-cart"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-label">Total Orders</div>
                                <div class="stat-value" id="totalOrders">0</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="stat-card">
                            <div class="stat-icon bg-info">
                                <i class="bi bi-currency-dollar"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-label">Average Value</div>
                                <div class="stat-value" id="avgValue">$0</div>
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
                            <h5 class="mb-0">Customer List</h5>
                        </div>
                        <div class="col-auto">
                            <div class="input-group">
                                <span class="input-group-text bg-white border-end-0">
                                    <i class="bi bi-search"></i>
                                </span>
                                <input
                                    type="text"
                                    class="form-control border-start-0"
                                    placeholder="Search customers..."
                                    id="searchCustomerInput"
                                    onkeyup="handleCustomerSearch()"
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
                                    <th width="80">Avatar</th>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th width="100">Status</th>
                                    <th width="150" class="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody id="customerTableBody">
                                <tr>
                                    <td colspan="6" class="text-center py-5 text-muted">
                                        <i class="bi bi-inbox fs-1 d-block mb-2"></i>
                                        No customers found. Click "Add New Customer" to get started.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>

        <!-- Modal: Add/Edit Customer -->
        <div class="modal fade" id="customerModal" tabindex="-1" aria-labelledby="customerModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-success text-white">
                        <h5 class="modal-title" id="customerModalLabel">
                            <i class="bi bi-person-plus me-2"></i>
                            Add New Customer
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form id="customerForm">
                            <input type="hidden" id="customerId" />

                            <div class="row g-3">
                                <div class="col-md-8">
                                    <div class="mb-3">
                                        <label for="customerFullName" class="form-label">Full Name <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="customerFullName" required />
                                    </div>

                                    <div class="mb-3">
                                        <label for="customerEmail" class="form-label">Email <span class="text-danger">*</span></label>
                                        <input type="email" class="form-control" id="customerEmail" required />
                                        <small class="text-muted">Must be a valid and unique email address</small>
                                    </div>

                                    <div class="mb-3">
                                        <label for="customerPhone" class="form-label">Phone</label>
                                        <input type="tel" class="form-control" id="customerPhone" maxlength="20" />
                                    </div>

                                    <div class="mb-3">
                                        <label for="customerAddress" class="form-label">Address</label>
                                        <textarea class="form-control" id="customerAddress" rows="3"></textarea>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <label class="form-label">Avatar</label>
                                    <div class="image-upload-container">
                                        <div class="image-preview" id="customerAvatarPreview">
                                            <i class="bi bi-person-circle"></i>
                                            <p>No avatar selected</p>
                                        </div>
                                        <input type="file" class="form-control mt-2" id="customerAvatar" accept="image/*" onchange="previewCustomerAvatar(event)" />
                                        <small class="text-muted d-block mt-1">Max 5MB (jpg, png, gif, webp)</small>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-success" onclick="saveCustomer()">
                            <i class="bi bi-save me-2"></i>Save Customer
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Offcanvas: Customer Detail -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="customerDetailOffcanvas" aria-labelledby="customerDetailLabel">
            <div class="offcanvas-header bg-success text-white">
                <h5 class="offcanvas-title" id="customerDetailLabel">
                    <i class="bi bi-info-circle me-2"></i>
                    Customer Details
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div id="customerDetailContent">
                    <!-- Content will be dynamically loaded -->
                </div>
            </div>
        </div>
    `;
}

// ===== CUSTOMER STATE =====
let customers = [];
let currentEditCustomerId = null;
let customerModal;
let customerDetailOffcanvas;

// ===== CUSTOMER INITIALIZATION =====
function initCustomers() {
    // Initialize Bootstrap components
    customerModal = new bootstrap.Modal(document.getElementById('customerModal'));
    customerDetailOffcanvas = new bootstrap.Offcanvas(document.getElementById('customerDetailOffcanvas'));
    
    // Load customers
    fetchCustomers();
}

// ===== CUSTOMER API FUNCTIONS =====
async function fetchCustomers() {
    try {
        showLoading();
        const response = await fetch(`${API_BASE_URL}/customers`);
        const data = await response.json();
        
        if (data.success) {
            customers = data.data;
            renderCustomerTable();
            updateCustomerStatistics();
        } else {
            showToast('Failed to load customers', 'danger');
        }
    } catch (error) {
        console.error('Error fetching customers:', error);
        showToast('Error loading customers', 'danger');
    } finally {
        hideLoading();
    }
}

async function createCustomer(formData) {
    try {
        showLoading();
        const response = await fetch(`${API_BASE_URL}/customers`, {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            showToast('Customer created successfully!', 'success');
            customerModal.hide();
            resetCustomerForm();
            await fetchCustomers();
        } else {
            showToast(data.message || 'Failed to create customer', 'danger');
        }
    } catch (error) {
        console.error('Error creating customer:', error);
        showToast('Error creating customer', 'danger');
    } finally {
        hideLoading();
    }
}

async function updateCustomer(id, formData) {
    try {
        showLoading();
        const response = await fetch(`${API_BASE_URL}/customers/${id}`, {
            method: 'PUT',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            showToast('Customer updated successfully!', 'success');
            customerModal.hide();
            resetCustomerForm();
            await fetchCustomers();
        } else {
            showToast(data.message || 'Failed to update customer', 'danger');
        }
    } catch (error) {
        console.error('Error updating customer:', error);
        showToast('Error updating customer', 'danger');
    } finally {
        hideLoading();
    }
}

async function deleteCustomer(id, name) {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) {
        return;
    }
    
    try {
        showLoading();
        const response = await fetch(`${API_BASE_URL}/customers/${id}`, {
            method: 'DELETE'
        });
        
        const data = await response.json();
        
        if (data.success) {
            showToast('Customer deleted successfully!', 'success');
            await fetchCustomers();
        } else {
            showToast(data.message || 'Failed to delete customer', 'danger');
        }
    } catch (error) {
        console.error('Error deleting customer:', error);
        showToast('Error deleting customer', 'danger');
    } finally {
        hideLoading();
    }
}

// ===== CUSTOMER RENDER FUNCTIONS =====
function renderCustomerTable() {
    const tbody = document.getElementById('customerTableBody');
    
    if (customers.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-5 text-muted">
                    <i class="bi bi-inbox fs-1 d-block mb-2"></i>
                    No customers found. Click "Add New Customer" to get started.
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = customers.map(customer => `
        <tr class="fade-in">
            <td>
                ${customer.avatarUrl 
                    ? `<img src="${customer.avatarUrl}" alt="${customer.fullName}" class="product-thumbnail rounded-circle">` 
                    : `<div class="product-thumbnail d-flex align-items-center justify-content-center bg-light rounded-circle">
                        <i class="bi bi-person text-muted"></i>
                       </div>`
                }
            </td>
            <td>
                <a href="#" class="product-name" onclick="showCustomerDetail('${customer.id}'); return false;">
                    ${customer.fullName}
                </a>
            </td>
            <td>
                <i class="bi bi-envelope me-1 text-muted"></i>
                ${customer.email}
            </td>
            <td>
                ${customer.phone 
                    ? `<i class="bi bi-telephone me-1 text-muted"></i>${customer.phone}` 
                    : '<span class="text-muted">-</span>'
                }
            </td>
            <td>
                <span class="badge ${customer.isActive ? 'bg-success' : 'bg-secondary'}">
                    ${customer.isActive ? 'Active' : 'Inactive'}
                </span>
            </td>
            <td class="text-center">
                <button class="btn btn-sm btn-outline-primary me-1" onclick="openEditCustomerModal('${customer.id}')" title="Edit">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger" onclick="deleteCustomer('${customer.id}', '${customer.fullName}')" title="Delete">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function updateCustomerStatistics() {
    const totalCustomers = customers.length;
    const activeCustomers = customers.filter(c => c.isActive).length;
    
    // Mock data for Total Orders and Average Value
    const totalOrders = Math.floor(totalCustomers * 2.5); // Mock: ~2.5 orders per customer
    const avgValue = totalCustomers > 0 ? (totalOrders * 150) / totalCustomers : 0; // Mock: $150 per order
    
    document.getElementById('totalCustomers').textContent = totalCustomers;
    document.getElementById('activeCustomers').textContent = activeCustomers;
    document.getElementById('totalOrders').textContent = totalOrders;
    document.getElementById('avgValue').textContent = formatCurrency(avgValue);
}

// ===== CUSTOMER MODAL FUNCTIONS =====
function openAddCustomerModal() {
    currentEditCustomerId = null;
    resetCustomerForm();
    document.getElementById('customerModalLabel').innerHTML = '<i class="bi bi-person-plus me-2"></i>Add New Customer';
    customerModal.show();
}

function openEditCustomerModal(id) {
    const customer = customers.find(c => c.id === id);
    if (!customer) return;
    
    currentEditCustomerId = id;
    
    // Populate form
    document.getElementById('customerId').value = customer.id;
    document.getElementById('customerFullName').value = customer.fullName;
    document.getElementById('customerEmail').value = customer.email;
    document.getElementById('customerPhone').value = customer.phone || '';
    document.getElementById('customerAddress').value = customer.address || '';
    
    // Show existing avatar
    if (customer.avatarUrl) {
        const preview = document.getElementById('customerAvatarPreview');
        preview.innerHTML = `<img src="${customer.avatarUrl}" alt="${customer.fullName}" class="rounded-circle">`;
    }
    
    document.getElementById('customerModalLabel').innerHTML = '<i class="bi bi-pencil me-2"></i>Edit Customer';
    customerModal.show();
}

function resetCustomerForm() {
    document.getElementById('customerForm').reset();
    document.getElementById('customerId').value = '';
    currentEditCustomerId = null;
    
    // Reset avatar preview
    const preview = document.getElementById('customerAvatarPreview');
    preview.innerHTML = `
        <i class="bi bi-person-circle"></i>
        <p>No avatar selected</p>
    `;
}

function saveCustomer() {
    const form = document.getElementById('customerForm');
    
    // Validate form
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Validate email format
    const email = document.getElementById('customerEmail').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address', 'danger');
        return;
    }
    
    // Create FormData
    const formData = new FormData();
    formData.append('fullName', document.getElementById('customerFullName').value);
    formData.append('email', email);
    formData.append('phone', document.getElementById('customerPhone').value);
    formData.append('address', document.getElementById('customerAddress').value);
    
    // Add avatar if selected
    const avatarFile = document.getElementById('customerAvatar').files[0];
    if (avatarFile) {
        formData.append('avatar', avatarFile);
    }
    
    // Create or update
    if (currentEditCustomerId) {
        updateCustomer(currentEditCustomerId, formData);
    } else {
        createCustomer(formData);
    }
}

// ===== CUSTOMER AVATAR PREVIEW =====
function previewCustomerAvatar(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('customerAvatarPreview');
    
    if (file) {
        // Validate file size (5MB)
        if (file.size > 5 * 1024 * 1024) {
            showToast('Avatar size must be less than 5MB', 'danger');
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
            preview.innerHTML = `<img src="${e.target.result}" alt="Preview" class="rounded-circle">`;
        };
        reader.readAsDataURL(file);
    }
}

// ===== CUSTOMER DETAIL VIEW =====
function showCustomerDetail(id) {
    const customer = customers.find(c => c.id === id);
    if (!customer) return;
    
    const content = document.getElementById('customerDetailContent');
    content.innerHTML = `
        ${customer.avatarUrl 
            ? `<img src="${customer.avatarUrl}" alt="${customer.fullName}" class="product-detail-image rounded-circle" style="width: 200px; height: 200px; object-fit: cover; margin: 0 auto; display: block;">` 
            : `<div class="product-detail-image d-flex align-items-center justify-content-center bg-light rounded-circle" style="width: 200px; height: 200px; margin: 0 auto;">
                <i class="bi bi-person fs-1 text-muted"></i>
               </div>`
        }
        
        <h4 class="mb-3 text-center mt-3">${customer.fullName}</h4>
        
        <div class="detail-item">
            <div class="detail-label"><i class="bi bi-envelope me-2"></i>Email</div>
            <div class="detail-value">${customer.email}</div>
        </div>
        
        ${customer.phone 
            ? `<div class="detail-item">
                <div class="detail-label"><i class="bi bi-telephone me-2"></i>Phone</div>
                <div class="detail-value">${customer.phone}</div>
               </div>` 
            : ''
        }
        
        ${customer.address 
            ? `<div class="detail-item">
                <div class="detail-label"><i class="bi bi-geo-alt me-2"></i>Address</div>
                <div class="detail-value">${customer.address}</div>
               </div>` 
            : ''
        }
        
        <div class="detail-item">
            <div class="detail-label">Status</div>
            <div class="detail-value">
                <span class="badge ${customer.isActive ? 'bg-success' : 'bg-secondary'}">
                    ${customer.isActive ? 'Active' : 'Inactive'}
                </span>
            </div>
        </div>
        
        <div class="detail-item">
            <div class="detail-label">Member Since</div>
            <div class="detail-value">${formatDate(customer.createdAt)}</div>
        </div>
        
        <div class="detail-item">
            <div class="detail-label">Last Updated</div>
            <div class="detail-value">${formatDate(customer.updatedAt)}</div>
        </div>
        
        <div class="d-grid gap-2 mt-4">
            <button class="btn btn-success" onclick="customerDetailOffcanvas.hide(); openEditCustomerModal('${customer.id}');">
                <i class="bi bi-pencil me-2"></i>Edit Customer
            </button>
            <button class="btn btn-outline-danger" onclick="customerDetailOffcanvas.hide(); deleteCustomer('${customer.id}', '${customer.fullName}');">
                <i class="bi bi-trash me-2"></i>Delete Customer
            </button>
        </div>
    `;
    
    customerDetailOffcanvas.show();
}

// ===== CUSTOMER SEARCH FUNCTION =====
function handleCustomerSearch() {
    const searchTerm = document.getElementById('searchCustomerInput').value.toLowerCase();
    
    if (!searchTerm) {
        renderCustomerTable();
        return;
    }
    
    const filteredCustomers = customers.filter(customer => 
        customer.fullName.toLowerCase().includes(searchTerm) ||
        customer.email.toLowerCase().includes(searchTerm) ||
        (customer.phone && customer.phone.toLowerCase().includes(searchTerm)) ||
        (customer.address && customer.address.toLowerCase().includes(searchTerm))
    );
    
    const tbody = document.getElementById('customerTableBody');
    
    if (filteredCustomers.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-5 text-muted">
                    <i class="bi bi-search fs-1 d-block mb-2"></i>
                    No customers found matching "${searchTerm}"
                </td>
            </tr>
        `;
        return;
    }
    
    // Temporarily replace customers array for rendering
    const originalCustomers = customers;
    customers = filteredCustomers;
    renderCustomerTable();
    customers = originalCustomers;
}
