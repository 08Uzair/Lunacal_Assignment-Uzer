# Lunacal- Frontend Assignment
## Live Demo

You can view the live version of this assignment here: [Link]()

Video Demo : [Link](https://youtu.be/yAMqG3_fETw) 

<img width="1919" height="931" alt="image" src="https://github.com/user-attachments/assets/b10166c4-15f4-40a4-856d-d381f1546b8d" />


Repository
View the source code on GitHub:
GitHub Repository Link
## Overview
This project is a responsive UI assignment built using **Vite**, **React**, **Tailwind CSS**, **Framer Motion**, and additional CSS for extra animations. The application replicates a Figma design, focusing on two main interactive widgets on the right-hand side while keeping the left side visually empty on laptop screens.

The main objectives are:
- Replicate the exact UI design, including padding, margins, shadows, and interactions.
- Ensure responsiveness for screens above 768px width (laptop).
- Implement interactive tabs and a gallery widget with the ability to add more images dynamically.

---

## Features

### About/Experience/Recommended Tabs Widget
- Contains three tabs: **About Me**, **Experiences**, and **Recommended**.
- Tabs are **clickable** and display corresponding content.
- Smooth transitions between tabs implemented using **Framer Motion**.

### Gallery Widget
- Displays a gallery of images.
- Users can **add more images** dynamically by clicking the "Add Image" button.
- Responsive layout ensuring proper alignment with the tabs widget.

### Responsiveness
- Fully responsive for **laptop screens** (width ≥ 768px).
- Left side of the screen intentionally kept empty while ensuring widgets on the right align correctly.
- All interactions, hover effects, and animations replicate the Figma prototype.

---

## Tech Stack
- **Vite** – Frontend build tool
- **React** – UI library
- **Tailwind CSS** – Utility-first CSS framework
- **Framer Motion** – Animation library
- **CSS** – Additional styling for custom effects

---

## Installation

1. Clone the repository:

```bash
git clone 'https://github.com/08Uzair/Lunacal_Assignment-Uzer.git'
cd Lunacal_Assignment-Uzer
```
Install dependencies:
```
bash
Copy code
npm install
```

Start the development server:
```
bash
Copy code
npm run dev
```

The application should now be running on ```http://localhost:5173```  

Usage
Switch Tabs: Click on the About Me, Experiences, or Recommended tabs to view content.

Add Images: Click the Add Image button in the gallery to upload or add new images.

Responsive View: Resize the browser to ensure the layout adapts correctly for laptop screens.

Project Structure
```
bash
Copy code
src/
├─ assets/          # Images and other static assets
├─ components/      # React components (Tabs, Gallery, etc.)
├─ App.jsx          # Main App component
├─ main.jsx         # Entry point
├─ index.css        # Global styles
```


Notes
All interactions and effects visible in the Figma prototype are recreated.

Focused on aligning the two widgets accurately with proper padding and spacing.

Extra animations added using simple CSS to enhance UX.


``` BY MOHAMMAD UZER QURESHI```
