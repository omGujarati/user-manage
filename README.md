# 🧾User Registration (MERN Stack)

This project is a **Full Stack User Registration Application** built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).

The application demonstrates proper **form handling, centralized state management, REST API design, validation, and MongoDB data storage**, focusing on logic and correctness rather than UI design.

---

## 🚀 Features

### ✅ Frontend (React)
- Controlled form inputs
- Centralized state management using `useState`
- Client-side validation
- Multiple input types:
  - Text
  - Email
  - Password
  - Number
  - Radio buttons
  - Checkbox group
  - Select dropdown
  - Multi-select
  - Date picker
  - Textarea
  - File metadata handling
- Axios API integration
- Form reset after successful submission

---

### ✅ Backend (Node + Express)
- RESTful API architecture
- MVC folder structure
- Server-side validation
- Proper error handling
- MongoDB data storage using Mongoose

---

## 📡 API Endpoints

### ➜ Create User


Creates a new user and stores form data including file metadata.

---

### ➜ Get User By ID
### ➜ Get All Users


Fetches a registered user using MongoDB ID.

---

## 🗂️ Project Structure

```
task-2/
│
├── frontend/
│ ├── src/
│ │ ├── api/
│ │ │ └── axios.js
│ │ ├── components/
| | | └── UserForm.jsx
│ │ ├── App.css
│ │ └── App.js
│
├── backend/
│ ├── bin/www
│ ├── config/
| | └── db.js
│ ├── models/
| | └── User.js
│ ├── controllers/
| | └── userController.js
│ ├── routes/
| | └── userRoutes.js
│ └── app.js
```

---

## 🧠 Form Data Stored
```
Example MongoDB document:
_id: 69a410d4a41e0f085ca7cb81
name: "Parth Kachchhi"
email: "parth@gmail.com"
password: "123456"
age: 23
gender: "male"
skills: Array (2)
  0: "React"
  1: "Node"
country: "USA"
languages: Array (2)
  0: "English"
  1: "Hindi"
dob: "2002-02-22"
about: "ad"
fileMeta: Object
  name: "link.pdf"
  size: 462946
  type: "application/pdf"

createdAt: 2026-03-01T10:11:32.702+00:00
updatedAt: 2026-03-01T10:11:32.702+00:00
__v:0
```
