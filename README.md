# AI & Robotics Summer Workshop Landing Page

A responsive workshop landing page built using React.js, Tailwind CSS, Express.js, and MongoDB Atlas for Kidrove's AI & Robotics Summer Workshop.

## Workshop Details

* Workshop: AI & Robotics Summer Workshop
* Age Group: 8–14 Years
* Duration: 4 Weeks
* Mode: Online
* Fee: ₹2,999
* Start Date: 15 July 2026

## Features

### Frontend

* Responsive Hero Section
* Workshop Details Section
* Learning Outcomes Section
* FAQ Accordion
* Registration Form
* Client-side Form Validation
* Loading States
* Modern UI with Tailwind CSS

### Backend

* Express.js REST API
* POST `/api/enquiry` endpoint
* Server-side Validation
* MongoDB Atlas Integration
* Registration Data Storage

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* JavaScript

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

## Project Structure

```bash
frontend/
├── src/
│   ├── components/
│   ├── App.jsx
│   └── main.jsx
│
├── backend/
│   ├── models/
│   ├── server.js
│   └── .env
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd workshop-landing-page
```

### Frontend Setup

```bash
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
node server.js
```

### Environment Variables

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## API Endpoint

### POST /api/enquiry

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210"
}
```

Response:

```json
{
  "success": true,
  "message": "Registration submitted successfully"
}
```

## Future Improvements

* Email notifications after registration
* Admin dashboard for enquiries
* Workshop schedule section
* Payment gateway integration
* Authentication and user accounts

```
```
