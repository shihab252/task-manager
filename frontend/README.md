# Task Manager App

A simple full-stack Task Manager application built for the AWTOMATIG Full Stack Intern take-home assignment.

The application allows users to create, view, update, and delete tasks through a React frontend connected to a Node.js/Express backend with MongoDB.

---

## Features

* Create a task with:

  * Title
  * Description
  * Status
* View all tasks
* Update task status:

  * To Do
  * In Progress
  * Done
* Delete tasks

---

## Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* JavaScript

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## Project Structure

```text
task-manager/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── .env
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## Quick Start

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
cd task-manager
```

---

## Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/taskmanager
```

Start the backend server:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

---

## Frontend Setup

Open a new terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the frontend folder:

```env
VITE_API_URL=http://localhost:5000/api/tasks
```

Start the frontend:

```bash
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

---

## API Endpoints

### Get All Tasks

```http
GET /api/tasks
```

### Create Task

```http
POST /api/tasks
```

Request Body:

```json
{
  "title": "Complete Assignment",
  "description": "Finish the task manager project",
  "status": "To Do"
}
```

### Update Task Status

```http
PATCH /api/tasks/:id
```

Request Body:

```json
{
  "status": "Done"
}
```

### Delete Task

```http
DELETE /api/tasks/:id
```

---

## Screenshots

Add screenshots of the application here if desired.

Example:

```text
screenshots/
├── dashboard.png
├── create-task.png
└── update-status.png
```

---

## Author

**Shihab**

Submitted for the AWTOMATIG Full Stack Intern Assignment.
