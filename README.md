# Ongoing Living & Learning Web Application (OLLI)

A full-stack web application for **Ongoing Living & Learning Inc.**, dedicated to providing support and services for adults with disabilities, including recreation and leisure activities, employment assistance, and caregiver support groups.

## Table of Contents

* [About](#about)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Configuration](#configuration)
* [Running Locally](#running-locally)
* [Environment Variables](#environment-variables)
* [Project Structure](#project-structure)
* [API Reference](#api-reference)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

## About

This repository contains the source code for OLLI, a web application built for **Ongoing Living & Learning Inc.**, a newly established organization providing support and services for adults with disabilities.

Participants can sign up for recreational events, explore employment assistance tools, and join caregiver support groups, all through an accessible, role-based web interface.

## Features

* **Recreation & Leisure**: Calendar, event listings, and signup workflows
* **Employment Assistance**: Job board, application tracker, resume builder
* **Caregiver Support Groups**: Forum, scheduling, resource library
* **User Management**: Role-based access (Admin, Staff, Participant, Caregiver)
* **Notifications**: Email and in-app alerts
* **Accessibility**: WCAG-compliant UI, keyboard navigation, ARIA support

## Tech Stack

* **Frontend**: React, Tailwind CSS, Swiper.js, Aos.js for animations
* **Backend**: Node.js, Express.js, MongoDB
* **Authentication**: JSON Web Tokens (JWT)
* **Deployment**: Google Cloud Run (app.yaml)

## Prerequisites

* Node.js >= 16.x
* npm or yarn
* MongoDB instance (local or cloud)

## Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/rl4658/olli-cheer.git
   cd olli
   ```
2. Install dependencies:

   ```bash
   cd src/Server
   npm install
   cd ../..
   cd src
   npm install
   ```

## Configuration

Copy the example environment file and set your variables:

```bash
cp src/Server/.env.example src/Server/.env
```

Edit `src/Server/.env`:

```env
PORT=8080
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Running Locally

1. Start the backend server:

   ```bash
   cd src/Server
   npm start
   ```
2. Start the frontend:

   ```bash
   cd ../..
   cd src
   npm start
   ```
3. Open `http://localhost:3000` in your browser.

## Environment Variables

* `PORT`: Port for the backend API (default: 8080)
* `MONGODB_URI`: Connection string for MongoDB
* `JWT_SECRET`: Secret key for signing JWTs

## Project Structure

```
olli/
├── public/                # Static HTML
├── src/                   # React frontend
│   ├── components/        # Reusable components
│   ├── CSS/               # Component-specific styles
│   ├── App.js             # Root component
│   └── index.js           # Entry point
└── src/Server/            # Express backend
    ├── Database/          # DB access layer
    ├── Routes/            # API route handlers
    ├── Helpers/           # JWT auth, utilities
    ├── server.js          # Server bootstrap
    └── .env.example       # Env var template
```

## API Reference

### Authentication

* `POST /api/signup` - Create a new user
* `POST /api/login`  - Authenticate and receive JWT

### Events

* `GET /api/events`        - List events
* `POST /api/events`       - Create event (admin)

... (Add more endpoints)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

Please follow the existing code style and include tests where applicable.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Contact

Maintainer: Your Name ([ruifeng2002@gmail.com](mailto:ruifeng2002@gmail.com))
