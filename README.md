# PDF Form Recreation Assessment

## Overview

This repository contains solutions for two PDF form recreation assignments developed using **Node.js**, **Express.js**, **Pug**, **HTML**, and **CSS**.

The objective of these assignments was to recreate the provided PDF documents as web pages while maintaining a layout closely matching the original forms. The applications also simulate backend data using multiple datasets, support A4 printing, and follow clean coding practices through reusable templates and modular project organization.

---

# Projects

## 1. Worker Progress Report

This project recreates the **Worker Progress Report** document using Pug templates and Express.

### Features

- Multi-page A4 document layout
- Dynamic worker information
- Dynamic Return-to-Work section
- Dynamic Recovery section
- Dynamic Pain Scale
- Dynamic checkbox rendering
- Reusable Pug mixins
- Dataset switching using Express routes
- Print-friendly layout
- Automatic footer positioning
- Clean modular architecture

---

## 2. Medical & Travel Expense Request

This project recreates the **Medical & Travel Expense Request** form.

### Features

- Multi-page A4 document layout
- Dynamic worker information
- Dynamic claim details
- Dynamic expense tables
- Variable-length expense rendering
- Dataset switching using Express routes
- Reusable Pug templates
- Print-friendly formatting
- Automatic page breaks
- Modular folder structure

---

# Technologies Used

- Node.js
- Express.js
- Pug Template Engine
- HTML5
- CSS3
- JavaScript (ES6)

---

# Key Features

- Backend data simulation
- Multiple datasets
- Dynamic template rendering
- Express routing
- Reusable Pug mixins
- Modular project structure
- Dynamic loops and conditional rendering
- Print-specific CSS
- A4 page formatting
- Flexbox layout
- Responsive document rendering

---

# Project Structure

```
Project assessment/
│
├── Assessment2/
│
│   ├── Worker progress/
│   │
│   │   ├── data/
│   │   │   ├── dataset1.js
│   │   │   └── dataset2.js
│   │   │
│   │   ├── public/
│   │   │   ├── css/
│   │   │   └── images/
│   │   │
│   │   ├── views/
│   │   │   ├── index.pug
│   │   │   └── mixins/
│   │   │
│   │   ├── app.js
│   │   ├── package.json
│   │   └── Worker progress demo.mp4
│   │
│   └── Medical report/
│       │
│       ├── data/
│       │   ├── dataset1.js
│       │   └── dataset2.js
│       │
│       ├── public/
│       │   ├── css/
│       │   └── images/
│       │
│       ├── views/
│       │   ├── expenses.pug
│       │   └── mixins/
│       │
│       ├── app.js
│       ├── package.json
│       └── Medical request demo.mp4
│
└── README.md
```

---

# Dynamic Data Demonstration

Both applications simulate backend responses using two different datasets.

The applications demonstrate:

- Dynamic worker information
- Different claim numbers
- Updated checkbox selections
- Dynamic text rendering
- Variable expense rows
- Automatic UI updates using the same Pug template

---

# Printing Support

Both projects are optimized for printing.

### Print Features

- A4 page size
- Print media queries
- Automatic page breaks
- Hidden control panel during printing
- Consistent headers and footers
- Proper page alignment

---

# How to Run

## Clone the repository

```bash
git clone https://github.com/YashaswiniMJ1319/HTML-CSS-JS-PDF-Assignment.git
```

## Install dependencies

Navigate into either project folder.

Example:

```bash
cd Assessment2/Worker\ progress
```

Install packages:

```bash
npm install
```

Run the application:

```bash
node app.js
```

or

```bash
npm start
```

Open your browser and visit:

```
http://localhost:3000
```

Repeat the same steps for the **Medical report** project.

---

# Video Demonstration

Each project includes a recorded demonstration covering:

- Project overview
- Live application demo
- Dataset switching
- Print preview
- Code walkthrough
- Folder structure
- Challenges faced
- Solutions implemented

---

# Coding Practices

The projects follow good software engineering practices by using:

- Modular folder structure
- Reusable Pug mixins
- Separate datasets
- Clean Express routing
- Reusable CSS
- Backend data simulation
- Maintainable code organization

---

# Author

**Yashaswini M J**

Bachelor of Engineering

Computer Science & Engineering (Data Science)
