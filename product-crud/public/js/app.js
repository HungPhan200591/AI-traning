// ===== CONFIGURATION =====
const API_BASE_URL = 'http://localhost:8998/api';

// ===== BOOTSTRAP INSTANCES =====
let toastNotification;

// ===== CURRENT PAGE STATE =====
let currentPage = 'products';

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Bootstrap components
    toastNotification = new bootstrap.Toast(document.getElementById('toastNotification'));
    
    // Load initial page (products)
    navigateTo('products');
});

// ===== NAVIGATION FUNCTIONS =====
function navigateTo(page) {
    currentPage = page;
    
    // Update active menu item
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === page) {
            item.classList.add('active');
        }
    });
    
    // Close mobile sidebar
    if (window.innerWidth < 992) {
        toggleSidebar();
    }
    
    // Load page content
    loadPageContent(page);
    
    return false; // Prevent default link behavior
}

function loadPageContent(page) {
    const mainContent = document.getElementById('mainContent');
    
    switch(page) {
        case 'dashboard':
            mainContent.innerHTML = getDashboardHTML();
            initDashboard();
            break;
        case 'products':
            mainContent.innerHTML = getProductsHTML();
            initProducts();
            break;
        case 'customers':
            mainContent.innerHTML = getCustomersHTML();
            initCustomers();
            break;
        default:
            mainContent.innerHTML = '<div class="container my-5"><h2>Page not found</h2></div>';
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

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

// ===== DASHBOARD HTML =====
function getDashboardHTML() {
    return `
        <!-- Header -->
        <header class="header-gradient">
            <div class="container py-4">
                <div class="row align-items-center mb-4">
                    <div class="col">
                        <h1 class="text-white mb-0">
                            <i class="bi bi-house-door me-2"></i>
                            Dashboard
                        </h1>
                        <p class="text-white-50 mb-0">Overview of your business</p>
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
                                <div class="stat-value" id="dashTotalProducts">0</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="stat-card">
                            <div class="stat-icon bg-success">
                                <i class="bi bi-people"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-label">Total Customers</div>
                                <div class="stat-value" id="dashTotalCustomers">0</div>
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
                                <div class="stat-value" id="dashTotalStock">0</div>
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
                                <div class="stat-value" id="dashTotalValue">$0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="container my-5">
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card shadow-sm">
                        <div class="card-header bg-white py-3">
                            <h5 class="mb-0"><i class="bi bi-box-seam me-2"></i>Quick Actions - Products</h5>
                        </div>
                        <div class="card-body">
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" onclick="navigateTo('products')">
                                    <i class="bi bi-box-seam me-2"></i>Manage Products
                                </button>
                                <button class="btn btn-outline-primary" onclick="navigateTo('products')">
                                    <i class="bi bi-plus-circle me-2"></i>Add New Product
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow-sm">
                        <div class="card-header bg-white py-3">
                            <h5 class="mb-0"><i class="bi bi-people me-2"></i>Quick Actions - Customers</h5>
                        </div>
                        <div class="card-body">
                            <div class="d-grid gap-2">
                                <button class="btn btn-success" onclick="navigateTo('customers')">
                                    <i class="bi bi-people me-2"></i>Manage Customers
                                </button>
                                <button class="btn btn-outline-success" onclick="navigateTo('customers')">
                                    <i class="bi bi-person-plus me-2"></i>Add New Customer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    `;
}

// ===== DASHBOARD INITIALIZATION =====
async function initDashboard() {
    try {
        showLoading();
        
        // Fetch products
        const productsRes = await fetch(`${API_BASE_URL}/products`);
        const productsData = await productsRes.json();
        
        // Fetch customers
        const customersRes = await fetch(`${API_BASE_URL}/customers`);
        const customersData = await customersRes.json();
        
        if (productsData.success) {
            const products = productsData.data;
            const totalProducts = products.length;
            const totalStock = products.reduce((sum, p) => sum + parseInt(p.stock || 0), 0);
            const totalValue = products.reduce((sum, p) => sum + (parseFloat(p.price || 0) * parseInt(p.stock || 0)), 0);
            
            document.getElementById('dashTotalProducts').textContent = totalProducts;
            document.getElementById('dashTotalStock').textContent = totalStock.toLocaleString();
            document.getElementById('dashTotalValue').textContent = formatCurrency(totalValue);
        }
        
        if (customersData.success) {
            const customers = customersData.data;
            document.getElementById('dashTotalCustomers').textContent = customers.length;
        }
        
    } catch (error) {
        console.error('Error loading dashboard:', error);
        showToast('Error loading dashboard data', 'danger');
    } finally {
        hideLoading();
    }
}
