# Task Management CRUD Application (engida test project)

This is a **Task Management CRUD Application** built with **NestJS**, **TypeORM**, and **PostgreSQL/MySQL**. It allows users to create, read, update, and delete tasks via a RESTful API. The backend is developed using **NestJS**, with TypeORM for database management.

---

## Features

- **Create Tasks**: Add new tasks with a title, description, and status.
- **Read Tasks**: Fetch all tasks or retrieve a single task by ID.
- **Update Tasks**: Modify the title, description, or status of existing tasks.
- **Delete Tasks**: Remove tasks from the database.

---

## Technologies Used

- **Backend**:
  - NestJS (Modular framework for building scalable server-side applications)
  - TypeORM (Object-Relational Mapper for database interactions)
  - PostgreSQL / MySQL (Relational database options)
  - Class-validator & NestJS Pipes (For request validation)

---

## Libraries and Resources

- **NestJS**: Used for structuring and handling API endpoints. [NestJS Documentation](https://docs.nestjs.com/)
- **TypeORM**: Used for managing database entities and migrations. [TypeORM Documentation](https://typeorm.io/)
- **PostgreSQL/MySQL**: Used as the primary database. [PostgreSQL Documentation](https://www.postgresql.org/docs/) | [MySQL Documentation](https://dev.mysql.com/doc/)

---

## API Endpoints

- `GET /tasks` - Fetch all tasks.
- `POST /tasks` - Create a new task.
- `PATCH /tasks/:id` - Update an existing task by ID.
- `DELETE /tasks/:id` - Delete a task by ID.

---

## Screenshot
