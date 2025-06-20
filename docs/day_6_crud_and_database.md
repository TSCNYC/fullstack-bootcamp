# Day 6: CRUD Operations & Database Management

## 🎯 Learning Objectives

By the end of this day, you will:
- Design and implement a robust database schema for the Todo application
- Set up database migrations using Alembic
- Implement full CRUD operations for todos and user data
- Handle relationships between users and their todos
- Optimize database queries for better performance

## 📝 Key Concepts & Resources

### 1. Database Design & SQLAlchemy
- [SQLAlchemy ORM Tutorial](https://docs.sqlalchemy.org/en/14/orm/tutorial.html)
- [Database Design Fundamentals](https://www.postgresql.org/docs/current/ddl.html)
- [SQLAlchemy Relationship Patterns](https://docs.sqlalchemy.org/en/14/orm/basic_relationships.html)
- [PostgreSQL Data Types](https://www.postgresql.org/docs/current/datatype.html)

### 2. Database Migrations
- [Alembic Tutorial](https://alembic.sqlalchemy.org/en/latest/tutorial.html)
- [Auto Generating Migrations](https://alembic.sqlalchemy.org/en/latest/autogenerate.html)
- [Migration Operations](https://alembic.sqlalchemy.org/en/latest/ops.html)
- [Best Practices](https://alembic.sqlalchemy.org/en/latest/cookbook.html)

### 3. CRUD & Query Optimization
- [SQLAlchemy Query API](https://docs.sqlalchemy.org/en/14/orm/query.html)
- [PostgreSQL Indexing](https://www.postgresql.org/docs/current/indexes.html)
- [Query Optimization Guide](https://www.postgresql.org/docs/current/performance-tips.html)
- [SQLAlchemy Session Guide](https://docs.sqlalchemy.org/en/14/orm/session_basics.html)

## 💻 Deliverables

### 1. Database Schema Design

Enhance the Todo application's data model to include:
- User profiles with additional fields (name, preferences, etc.)
- Todo items with categories and due dates
- Tags for organizing todos
- Task completion history

**Success Criteria:**
- All models properly defined with SQLAlchemy
- Appropriate relationships established between models
- Proper constraints and indexes defined
- Schema supports all required features

**Hints:**
- Consider using an enum for todo status
- Think about soft delete vs hard delete
- Look into SQLAlchemy hybrid properties
- Consider using PostgreSQL-specific features

### 2. Migration System

Set up a robust migration system that:
- Initializes the database with base tables
- Handles schema updates gracefully
- Supports rollback operations
- Includes data migrations when needed

**Success Criteria:**
- Initial migration creates all necessary tables
- Migrations can be applied and rolled back
- Data integrity is maintained during migrations
- Migration history is properly tracked

**Hints:**
- Use Alembic's autogenerate feature
- Include both up and down migrations
- Test migrations with sample data
- Consider using branched migrations

### 3. CRUD API Implementation

Implement comprehensive CRUD operations for:
- User management (create, update, delete profiles)
- Todo operations (create, update, delete, mark complete)
- Tag management (add, remove, rename)
- Bulk operations (batch updates, deletes)

**Success Criteria:**
- All CRUD operations work as expected
- Proper validation is implemented
- Errors are handled gracefully
- Operations maintain data integrity

**Hints:**
- Use SQLAlchemy sessions effectively
- Implement proper transaction boundaries
- Consider using marshmallow for validation
- Handle edge cases and conflicts

### 4. Relationship Management

Implement efficient relationship handling for:
- User-Todo relationships
- Todo-Tag associations
- Task completion history
- User preferences

**Success Criteria:**
- Relationships are properly loaded
- N+1 query problems are avoided
- Cascades work correctly
- Data consistency is maintained

**Hints:**
- Use appropriate loading strategies
- Consider using joinedload()
- Implement proper cascading rules
- Think about relationship lifecycle

### 5. Query Optimization

Optimize the application's database access:
- Add appropriate indexes
- Optimize common queries
- Implement caching where appropriate
- Add query monitoring

**Success Criteria:**
- Common queries execute efficiently
- Indexes are used effectively
- Memory usage is optimized
- Query performance is monitored

**Hints:**
- Use EXPLAIN ANALYZE
- Consider composite indexes
- Look into query caching
- Monitor query execution time

## 🔍 Final Validation

Your solution should:
1. Handle concurrent users effectively
2. Maintain data integrity
3. Perform well under load
4. Support all required features
5. Be easy to maintain and extend

## 🚨 Common Issues and Solutions

1. Schema Issues:
   - Foreign key errors? Check relationship definitions
   - Constraint violations? Validate input data
   - Migration failed? Check dependencies

2. Performance Problems:
   - Slow queries? Check execution plan
   - High memory usage? Review fetch strategy
   - Deadlocks? Check transaction scope

3. Data Integrity:
   - Orphaned records? Check cascade rules
   - Duplicate data? Add unique constraints
   - Lost updates? Use proper concurrency control

4. Development Workflow:
   - Migration conflicts? Use branches
   - Schema drift? Sync with version control
   - Test data? Use factories/fixtures

## 📚 Additional Resources

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [SQLAlchemy Guide](https://docs.sqlalchemy.org/)
- [Database Design Patterns](https://www.postgresql.org/docs/current/ddl-schemas.html)
- [Query Optimization Guide](https://www.postgresql.org/docs/current/performance-tips.html)

## 🎉 Next Steps

After mastering database operations:
- Study advanced query optimization
- Learn about database replication
- Implement connection pooling
- Explore database monitoring
- Consider caching strategies

Remember: Database design and optimization are critical for application performance. Take time to understand the implications of your design decisions. 