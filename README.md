# TravelTrucks Campers

## Project Description

**TravelTrucks Campers** is a frontend web application for a campervan rental company.  
The app allows users to browse camper listings, apply filters, view detailed camper information, read reviews, and book a campervan.

The project is built with **Next.js**, **TypeScript**, and uses a ready-made backend API.

---

## Installation & Usage

```bash
git clone https://github.com/your-username/traveltrucks-campers.git
cd traveltrucks-campers
npm install
npm run dev
```
---

## Backend API

- **Base URL:**  
  https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers
- **Docs:**  
  https://github.com/mockapi-io/docs/wiki

### Endpoints
- `GET /campers` – get all campers (backend filtering & pagination)
- `GET /campers/:id` – get camper details by ID

---

## Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **React**
- **Zustand** – state management
- **Axios** – API requests
- **Formik & Yup** – forms and validation
- **React Datepicker**
- **React Toastify**
- **CSS Modules**

---

## Pages & Routes

- `/` – Home page with CTA
- `/catalog` – Camper catalog with filters and pagination
- `/catalog/:id` – Camper details page

---

## Features

- Backend-powered filtering (location, vehicle type, features)
- Favorites with persistence after page reload
- Backend pagination with **Load More**
- Camper details with features, specifications, and reviews
- Booking form with validation and success notification
- Price formatting (e.g. `8000.00`)
- Loader for async requests

---

## State Management

Global state is managed with **Zustand**:
- Camper list
- Filters
- Favorites

Previous search results are cleared before applying new filters.
