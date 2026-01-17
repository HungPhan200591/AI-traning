# Product CRUD Backend API

Backend API cho ứng dụng quản lý sản phẩm, xây dựng bằng **Node.js + Express + PostgreSQL + Sequelize** theo kiến trúc **Layered Architecture**.

## 🏗️ Kiến trúc

```
Route → Controller → Service → Model → Database
```

- **Route**: Định nghĩa các endpoint API
- **Controller**: Xử lý request/response, validation đầu vào
- **Service**: Business logic, xử lý nghiệp vụ
- **Model**: Định nghĩa schema database (Sequelize ORM)

## 📁 Cấu trúc thư mục

```
demo-project/
├── src/
│   ├── config/          # Cấu hình database
│   ├── models/          # Sequelize models
│   ├── services/        # Business logic
│   ├── controllers/     # Request handlers
│   ├── routes/          # API routes
│   └── middlewares/     # Error handling, validation
├── server.js            # Entry point
├── docker-compose.yml   # PostgreSQL container
├── package.json
└── .env.example
```

## 🚀 Cài đặt và chạy

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Tạo file `.env`

```bash
cp .env.example .env
```

### 3. Khởi động PostgreSQL bằng Docker

```bash
docker-compose up -d
```

### 4. Chạy server

**Development mode (với nodemon):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Server sẽ chạy tại: `http://localhost:8989`

## 📡 API Endpoints

### Base URL: `http://localhost:8989/api`

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/products` | Lấy danh sách tất cả sản phẩm |
| GET | `/products/:id` | Lấy sản phẩm theo ID |
| POST | `/products` | Tạo sản phẩm mới |
| PUT | `/products/:id` | Cập nhật sản phẩm |
| DELETE | `/products/:id` | Xóa sản phẩm |

### Query Parameters (GET /products)

- `category`: Lọc theo danh mục
- `isActive`: Lọc theo trạng thái (true/false)

### Request Body Example (POST/PUT)

```json
{
  "name": "iPhone 15 Pro",
  "description": "Latest Apple flagship phone",
  "price": 999.99,
  "stock": 50,
  "category": "Electronics",
  "isActive": true
}
```

### Response Format

**Success:**
```json
{
  "success": true,
  "message": "Product created successfully",
  "data": { ... }
}
```

**Error:**
```json
{
  "success": false,
  "error": "Validation Error",
  "details": [ ... ]
}
```

## 🧪 Test API bằng cURL

### 1. Tạo sản phẩm mới
```bash
curl -X POST http://localhost:8989/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "MacBook Pro M3",
    "description": "High-performance laptop",
    "price": 2499.99,
    "stock": 20,
    "category": "Electronics"
  }'
```

### 2. Lấy tất cả sản phẩm
```bash
curl http://localhost:8989/api/products
```

### 3. Lấy sản phẩm theo ID
```bash
curl http://localhost:8989/api/products/1
```

### 4. Cập nhật sản phẩm
```bash
curl -X PUT http://localhost:8989/api/products/1 \
  -H "Content-Type: application/json" \
  -d '{
    "price": 2299.99,
    "stock": 15
  }'
```

### 5. Xóa sản phẩm
```bash
curl -X DELETE http://localhost:8989/api/products/1
```

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL 15
- **ORM**: Sequelize
- **Container**: Docker & Docker Compose

## ✨ Features

✅ RESTful API chuẩn  
✅ Layered Architecture (tách biệt Route/Controller/Service/Model)  
✅ Centralized Error Handling  
✅ CORS enabled cho Frontend  
✅ Database connection pooling  
✅ Model validation với Sequelize  
✅ Auto-sync database schema  
✅ Environment variables  
✅ Graceful shutdown  

## 📝 License

MIT
