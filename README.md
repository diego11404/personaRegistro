# Persona Registro

A full-stack web application for managing person records with health information tracking capabilities.

## Overview

Persona Registro is a comprehensive person registration system built with Angular and Node.js. The application allows users to register and manage personal information including contact details, address, and health-related data such as COVID-19 status and symptoms.

## Technology Stack

### Frontend
- **Angular 9.0.6** - Modern web application framework
- **Bootstrap 4.4.1** - Responsive UI framework
- **TypeScript 3.7.5** - Typed superset of JavaScript
- **RxJS 6.5.4** - Reactive programming library

### Backend
- **Node.js** - JavaScript runtime
- **Express 4.17.1** - Web application framework
- **TypeScript 3.8.3** - Typed superset of JavaScript
- **MySQL2** - MySQL client for Node.js

### Proxy
- **TypeScript** - Communication layer between frontend and backend

## Prerequisites

Before running this application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MySQL](https://www.mysql.com/) (v5.7 or higher)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/diego11404/personaRegistro.git
cd personaRegistro
```

### 2. Database Setup

1. Start your MySQL server
2. Execute the SQL script to create the database and table:

```bash
mysql -u root -p < script.sql
```

**Note:** If you encounter authentication issues (ER_NOT_SUPPORTED_AUTH_MODE), run the following commands in MySQL:

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
FLUSH PRIVILEGES;
```

The script will:
- Create a schema named `diego`
- Create a `persona` table with fields for personal and health information
- Insert sample data for testing

### 3. Install Dependencies

#### Install Server Dependencies
```bash
cd server
npm install
```

#### Install Angular Frontend Dependencies
```bash
cd ../angular
npm install
```

#### Install Proxy Dependencies
```bash
cd ../proxy
npm install
```

## Running the Application

### Start the Backend Server

```bash
cd server
npm start
```

The API server will start and connect to your MySQL database.

### Start the Angular Frontend

Open a new terminal window:

```bash
cd angular
npm start
```

The application will be available at `http://localhost:4200/`

### Start the Proxy (if needed)

Open another terminal window:

```bash
cd proxy
npm start
```

## Project Structure

```
personaRegistro/
├── angular/           # Angular frontend application
│   ├── src/
│   │   └── app/
│   │       ├── persona/        # Person list component
│   │       ├── add-persona/    # Add person component
│   │       └── persona.service.ts
│   └── package.json
├── server/            # Node.js/Express backend API
│   ├── src/
│   │   ├── controller/
│   │   └── model/
│   └── package.json
├── proxy/             # Proxy server
│   ├── src/
│   └── package.json
└── script.sql         # Database setup script
```

## Features

- **Person Registration**: Add new person records with comprehensive information
- **Person Management**: View and manage registered persons
- **Health Tracking**: Track COVID-19 status and symptoms
- **Contact Information**: Store phone numbers, cell phone, and address
- **Date of Birth**: Record birth dates for age tracking
- **Responsive Design**: Mobile-friendly interface using Bootstrap

## Database Schema

The `persona` table includes the following fields:

- `idpersona` (INT, AUTO_INCREMENT, PRIMARY KEY)
- `nombre` (VARCHAR 20) - First name
- `apellido` (VARCHAR 20) - Last name
- `direccion` (VARCHAR 50) - Address
- `telefono` (VARCHAR 12) - Phone number
- `celular` (VARCHAR 12) - Cell phone number
- `fechaNacimiento` (DATETIME) - Date of birth
- `hasCoronavirus` (VARCHAR 3) - COVID-19 status (yes/no)
- `hasSintomas` (VARCHAR 3) - Symptoms status (yes/no)

## Development

### Angular Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build Frontend

```bash
cd angular
npm run build
```

Build artifacts will be stored in the `dist/` directory.

### Build Backend

```bash
cd server
npm run build
```

Compiled TypeScript files will be stored in the `dist/` directory.

### Running Tests

#### Frontend Tests
```bash
cd angular
npm test
```

#### End-to-End Tests
```bash
cd angular
npm run e2e
```

### Linting

```bash
cd angular
npm run lint
```

## License

This project is private and not licensed for public use.

## Author

diego11404
