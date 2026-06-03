# TaskFlow

A full-stack task management application built with React, Node.js, and Express.

Live Demo

Frontend:
https://taskflow-flame-three.vercel.app

Backend API:
https://taskflow-ai2l.onrender.com
## Features

* Create new tasks
* Delete tasks
* Mark tasks as completed
* Undo completed tasks
* View total task count
* View completed task statistics
* Persistent storage using JSON file storage
  

## Tech Stack

### Frontend

* React
* Axios
* Vite

### Backend

* Node.js
* Express.js

### Storage

* JSON File Storage (`tasks.json`)

## Project Structure

```text
taskflow/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskItem.jsx
│   │   ├── services/
│   │   │   └── taskApi.js
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── data/
│   │   └── tasks.json
│   ├── app.js
│   └── server.js
```

## API Endpoints

| Method | Endpoint              | Description              |
| ------ | --------------------- | ------------------------ |
| GET    | /api/tasks            | Get all tasks            |
| POST   | /api/tasks            | Create a task            |
| PUT    | /api/tasks/:id        | Update a task            |
| DELETE | /api/tasks/:id        | Delete a task            |
| PATCH  | /api/tasks/:id/toggle | Toggle completion status |

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd taskflow
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

## Architecture

React UI → Axios → Express Routes → Controllers → Services → JSON Storage

## Future Improvements

* Task filtering
* Due dates
* Local storage support
* MongoDB integration
* User authentication
* Task categories

