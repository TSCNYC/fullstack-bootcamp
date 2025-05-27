# Day 2: Flask API Development

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:
- Understand RESTful API principles
- Set up a Flask application with proper project structure
- Create API endpoints with proper HTTP methods
- Implement request validation and error handling
- Use environment variables for configuration
- Document API endpoints using OpenAPI/Swagger

## 📝 Prerequisites

- Completed Day 1 Git setup
- Python 3.9+ installed
- Basic understanding of HTTP methods (GET, POST, PUT, DELETE)
- VS Code with Python extension installed

## 🚀 Lesson Content

### 1. Introduction to RESTful APIs

#### What is an API?
- Application Programming Interface
- Contract between client and server
- Defines how different software components interact

#### REST Principles
- Client-Server Architecture
- Stateless Communication
- Cacheable Resources
- Uniform Interface
- Layered System

### 2. Project Structure Setup

```
server/
├── app/
│   ├── __init__.py
│   ├── models/
│   ├── routes/
│   └── services/
├── tests/
├── .env
├── .gitignore
├── requirements.txt
└── run.py
```

### 3. Setting Up the Development Environment

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Create a `.env` file:
```bash
FLASK_APP=run.py
FLASK_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

### 4. Creating Your First Flask Application

1. Basic Flask app structure
2. Configuration management
3. Blueprint organization
4. Error handling
5. Request validation

### 5. API Endpoint Development

#### Example Todo API Endpoints:
- GET /api/todos - List all todos
- POST /api/todos - Create a new todo
- GET /api/todos/<id> - Get a specific todo
- PUT /api/todos/<id> - Update a todo
- DELETE /api/todos/<id> - Delete a todo

### 6. Database Integration

1. SQLAlchemy setup
2. Model definition
3. Database migrations
4. CRUD operations

### 7. API Documentation

1. OpenAPI/Swagger setup
2. Endpoint documentation
3. Request/Response examples
4. Authentication documentation

## 💻 Practice Exercises

1. Create a new Flask application with the recommended project structure
2. Implement a basic health check endpoint
3. Create a Todo model with the following fields:
   - id (primary key)
   - title (string)
   - description (text)
   - completed (boolean)
   - created_at (datetime)
4. Implement CRUD endpoints for the Todo model
5. Add request validation
6. Document your API using Swagger

## 📚 Additional Resources

- [Flask Documentation](https://flask.palletsprojects.com/)
- [REST API Best Practices](https://restfulapi.net/)
- [SQLAlchemy Documentation](https://docs.sqlalchemy.org/)
- [OpenAPI Specification](https://swagger.io/specification/)

## 🎯 Next Steps

- Learn about database relationships
- Implement user authentication
- Add request rate limiting
- Set up API testing

## 📝 Homework

1. Complete all practice exercises
2. Add pagination to the list endpoint
3. Implement filtering and sorting
4. Add error logging
5. Write unit tests for your endpoints

## 🔍 Quiz

1. What are the main HTTP methods used in REST APIs?
2. What is the purpose of Flask blueprints?
3. How do you handle database migrations in Flask?
4. What is the difference between PUT and PATCH?
5. Why is API documentation important?

## 🎉 Conclusion

You've now learned how to create a basic Flask API! In the next lesson, we'll start building the React frontend that will consume this API. 
