# Natural Language to MongoDB Query Converter

A full-stack web application that converts plain English queries into executable MongoDB queries using AI (Gemini API), executes them on MongoDB Atlas, and displays the results dynamically on a React frontend.

This project demonstrates how Natural Language Processing can simplify database interaction for non-technical users.

---

##  Features

- Convert English queries into MongoDB JSON queries
- AI-powered query generation using Gemini API
- Execute dynamic MongoDB `find()` queries
- Full-stack integration (React + Node.js + MongoDB)
- Real-time data rendering
- REST API based architecture
- Error handling and response validation

---

##  Architecture Overview

Frontend (React)  
⬇  
Backend (Node.js + Express)  
⬇  
Gemini API (Natural Language → MongoDB Query)  
⬇  
MongoDB Atlas (Query Execution)  
⬇  
Backend → Frontend (Results Display)

---

##  Tech Stack

### Frontend
- React
- Axios

### Backend
- Node.js
- Express.js
- Mongoose
- Axios

### Database
- MongoDB Atlas

### AI Integration
- Google Gemini API


---

##  How It Works

### 1️ User Input

User enters a query like:

```
Show employees with salary greater than 40000
```

---

### 2️ Frontend

- Sends POST request to backend:
  ```
  POST /api/query
  ```
- Request body:
  ```json
  { "query": "Show employees with salary greater than 40000" }
  ```

---

### 3️ Backend Processing

- Receives the query
- Sends it to Gemini API with a structured prompt
- Gemini returns MongoDB JSON query like:

```json
{ "salary": { "$gt": 40000 } }
```

---

### 4️ MongoDB Execution

Backend executes:

```javascript
Employee.find({ salary: { $gt: 40000 } })
```

---

### 5️ Response

Results are sent back to frontend and displayed dynamically.

---

##  Database Structure

Collection: `employees`

Example Document:

```json
{
  "_id": "ObjectId(...)",
  "name": "Amit",
  "age": 25,
  "department": "IT",
  "salary": 50000
}
```

---

##  Environment Variables

Create a `.env` file inside the `backend/` folder:

```
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
```

---

##  How to Run the Project

### 1️ Clone Repository

```
git clone <your-repo-link>
cd Natural-Language-MongoDB
```

---

### 2️ Backend Setup

```
cd backend
npm install
node server.js
```

Backend runs on:
```
http://localhost:5000
```

---

### 3️ Frontend Setup

```
cd frontend
npm install
npm start
```

Frontend runs on:
```
http://localhost:3000
```

---

##  Key Learning Outcomes

- Full-stack REST API development
- MongoDB dynamic query execution
- AI API integration
- Prompt engineering
- JSON parsing and validation
- Debugging database connections
- Frontend–backend integration

---

##  Future Improvements

- Support for aggregation queries
- Multi-collection support
- Query history tracking
- User authentication
- Cloud deployment
- Role-based access control

---

##  Example Queries

- Show employees with salary greater than 40000
- Show employees from IT department
- Show employees with age less than 30
- Show employees with salary between 30000 and 70000

---

##  License

This project is created for educational purposes.