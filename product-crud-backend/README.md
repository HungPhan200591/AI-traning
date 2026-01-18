# Product CRUD Backend

Full-featured Node.js backend for Product Management with CRUD operations, built using **Layered Architecture**, **Express.js**, **Sequelize ORM**, and **PostgreSQL**.

## ✨ Features

- ✅ **Layered Architecture** (Config → Model → Service → Controller → Route)
- ✅ **RESTful API** with full CRUD operations
- ✅ **PostgreSQL** database with Sequelize ORM
- ✅ **Image Upload** using Multer (saved to `public/assets/`)
- ✅ **Auto Database Sync** (creates tables automatically)
- ✅ **CORS** enabled for cross-origin requests
- ✅ **Static File Serving** for uploaded images
- ✅ **Comprehensive Error Handling**
- ✅ **Input Validation** middleware
- ✅ **Docker Compose** for PostgreSQL

## 📋 Prerequisites

- **Node.js** >= 16.x
- **Docker** and **Docker Compose**
- **npm** or **yarn**

## 🚀 Installation

### 1. Clone or navigate to project directory

```bash
cd d:\Study\AI\Traning\product-crud-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start PostgreSQL with Docker Compose

```bash
docker-compose up -d
```

### 4. Configure environment variables

The `.env` file is already configured with default values:

```env
PORT=8998
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5435
DB_NAME=product_db
DB_USER=postgres
DB_PASSWORD=postgres
```

### 5. Start the development server

```bash
npm run dev
```

The server will start at `http://localhost:8998`

## 📁 Project Structure

```
product-crud-backend/
├── src/
│   ├── config/
│   │   ├── database.js          # Sequelize configuration
│   │   └── multer.js            # File upload configuration
│   ├── models/
│   │   ├── Product.js           # Product model
│   │   └── index.js             # Model exports
│   ├── services/
│   │   └── ProductService.js    # Business logic
│   ├── controllers/
│   │   └── ProductController.js # Request handlers
│   ├── routes/
│   │   ├── productRoutes.js     # Product endpoints
│   │   └── index.js             # Route aggregation
│   └── middlewares/
│       ├── errorHandler.js      # Global error handler
│       └── validation.js        # Input validation
├── public/
│   └── assets/                  # Uploaded images
├── server.js                    # Application entry point
├── package.json
├── .env
└── docker-compose.yml
```

## 🔌 API Endpoints

### Base URL: `http://localhost:8998/api`

| Method | Endpoint | Description | Body/Query |
|--------|----------|-------------|------------|
| `GET` | `/health` | Health check | - |
| `GET` | `/products` | Get all products | Query: `category`, `isActive`, `search` |
| `GET` | `/products/:id` | Get product by ID | - |
| `POST` | `/products` | Create new product | Form-data (see below) |
| `PUT` | `/products/:id` | Update product | Form-data (see below) |
| `DELETE` | `/products/:id` | Delete product (soft) | - |

### Product Model

```json
{
  "id": "uuid",
  "name": "string (required, max 255)",
  "description": "text (optional)",
  "price": "decimal (required, >= 0)",
  "stock": "integer (required, >= 0)",
  "category": "string (optional, max 100)",
  "imageUrl": "string (optional)",
  "isActive": "boolean (default: true)",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Example: Create Product (POST `/api/products`)

**Request (multipart/form-data):**

```
name: "Laptop Dell XPS 15"
description: "High-performance laptop"
price: 1500.00
stock: 10
category: "Electronics"
image: [file upload]
```

**Response:**

```json
{
  "success": true,
  "message": "Product created successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Laptop Dell XPS 15",
    "description": "High-performance laptop",
    "price": "1500.00",
    "stock": 10,
    "category": "Electronics",
    "imageUrl": "/assets/laptop-1705561234567-123456789.jpg",
    "isActive": true,
    "createdAt": "2026-01-18T03:37:00.000Z",
    "updatedAt": "2026-01-18T03:37:00.000Z"
  }
}
```

### Example: Get All Products (GET `/api/products`)

**Request:**

```
GET /api/products?category=Electronics&isActive=true
```

**Response:**

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "Laptop Dell XPS 15",
      "price": "1500.00",
      "stock": 10,
      "category": "Electronics",
      "imageUrl": "/assets/laptop-1705561234567-123456789.jpg",
      "isActive": true
    }
  ]
}
```

## 🖼️ Accessing Uploaded Images

Images are served statically from `http://localhost:8998/assets/filename.jpg`

Example: `http://localhost:8998/assets/laptop-1705561234567-123456789.jpg`

## 🛠️ Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Sequelize** - ORM for PostgreSQL
- **PostgreSQL** - Relational database
- **Multer** - File upload middleware
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management
- **Docker Compose** - Container orchestration

## 🧪 Testing with Postman/Thunder Client

1. **Create Product**: POST to `/api/products` with `multipart/form-data`
2. **Get All Products**: GET to `/api/products`
3. **Get Product by ID**: GET to `/api/products/{id}`
4. **Update Product**: PUT to `/api/products/{id}` with `multipart/form-data`
5. **Delete Product**: DELETE to `/api/products/{id}`

## 📝 Notes

- **Auto-sync Database**: The application automatically creates/updates database tables on startup
- **Soft Delete**: DELETE endpoint sets `isActive = false` instead of removing records
- **Image Upload**: Maximum file size is 5MB, accepts: jpg, jpeg, png, gif, webp
- **CORS**: Enabled for all origins (configure in production)

## 🔄 Development Workflow

```bash
# Start PostgreSQL
docker-compose up -d

# Install dependencies
npm install

# Run in development mode (with auto-reload)
npm run dev

# Run in production mode
npm start

# Stop PostgreSQL
docker-compose down
```

## 📄 License

ISC

---

**Built with ❤️ using Layered Architecture**
