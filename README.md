# Task Manager App

A simple full-stack Task Manager application built for the **AWTOMATIG Full Stack Intern** take-home assignment.

The application allows users to cleanly create, view, update, and delete tasks via a responsive React frontend powered by a Node.js/Express REST API and a MongoDB database.

---

## Features

* **Task Creation:** Add new items with a Title, Description, and designated Status.
* **Live Dashboard:** Fetch and view all stored tasks dynamically from the database.
* **Inline Status Updates:** Seamlessly move tasks between **To Do**, **In Progress**, and **Done** states.
* **Task Deletion:** Permanently remove items with real-time UI synchronization.

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* JavaScript (ES6+)

### Backend

* Node.js & Express.js
* MongoDB & Mongoose ODM

---

## 📦 Project Structure

```text
task-manager/
│
├── frontend/
│   ├── src/            # Components, styles, and core UI logic
│   ├── public/         # Static assets
│   ├── .env            # Frontend environment variables
│   └── package.json
│
├── backend/
│   ├── controllers/    # Route handler logic
│   ├── models/         # Mongoose schema definitions
│   ├── routes/         # Express API endpoint definitions
│   ├── .env            # Database and port configurations
│   ├── server.js       # Application entry point
│   └── package.json
│
└── README.md

```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
cd task-manager

```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend

```

Install the required dependencies:

```bash
npm install

```

Create a `.env` file in the root of the `backend/` directory:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/taskmanager

```

Launch the development server:

```bash
npm run dev

```

> **Backend Service Local URL:** `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal window and navigate to the frontend directory:

```bash
cd frontend

```

Install the required dependencies:

```bash
npm install

```

Create a `.env` file in the root of the `frontend/` directory:

```env
VITE_API_URL=http://localhost:5000/api/tasks

```

Launch the Vite development server:

```bash
npm run dev

```

> **Frontend Application Local URL:** `http://localhost:5173`

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| **GET** | `/api/tasks` | Retrieves all tasks from the database |
| **POST** | `/api/tasks` | Creates a new task |
| **PATCH** | `/api/tasks/:id` | Updates the status of an existing task |
| **DELETE** | `/api/tasks/:id` | Deletes a task by its unique ID |

### Sample Request Payloads

* **POST** `/api/tasks`

```json
{
  "title": "Complete Assignment",
  "description": "Finish the task manager project for submission",
  "status": "To Do"
}

```

* **PATCH** `/api/tasks/:id`

```json
{
  "status": "Done"
}

```

---

## 👥 Author

**Shihab**

*Submitted as part of the technical screening process for the Full Stack Intern role at AWTOMATIG.*
