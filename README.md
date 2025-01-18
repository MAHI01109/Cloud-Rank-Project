# Cloud Rank Project

Cloud Rank Project is a React-based analytics application built using **Vite.js**. It provides tools for analyzing user accounts, call types, and other data through tables and charts. The project is styled using **Tailwind CSS** and utilizes several libraries for advanced functionality like dropdowns, icons, and charts.

---

## Features

- **AccountDetailsTable**: Displays the selected user's account details and territory-related analytics in table.
- **CallTypesTable**: Shows selected call types details in table with a reference to the pie chart.
- **Pagination**: A reusable component for handling pagination in tables.
- **PieChart**: Visualizes the selected user's account calls in a pie chart format.
- **SelectUser**: Allows selecting a user to view their analytics and account details.

---

## Technologies Used

### Core Framework:

- **Vite.js**: For a faster and optimized development experience.

### Styling:

- **Tailwind CSS**: For building responsive and modern user interfaces with minimal effort.

### Icons:

- **Heroicons**: To add icons.

### Charting Libraries:

- **Chart.js**: For rendering highly customizable pie charts.
- **React Chart.js**: For integrating Chart.js with React.

### Dropdowns:

- **Headless UI**: Provides accessible and customizable dropdown components.

---

## Folder Structure

### `src/components`

This folder contains all reusable components used in the project:

1. **AccountDetailsTable.jsx**

   - Displays the selected user's account details and territory analytics.

2. **CallTypesTable.jsx**

   - Shows details of the selected call types, visualized with a pie chart.

3. **Pagination.jsx**

   - Handles table pagination with reusable controls.

4. **PieChart.jsx**

   - Visualizes selected user account data using a pie chart.

5. **SelectUser.jsx**
   - Dropdown for selecting a user to view analytics and account details.

### `src/data`

This folder stores data used in the application:

1. **user.js**

   - Contains user-related data.

2. **emails.js**

   - Stores data about emails for each user.

3. **calls.js**

   - Contains call-related data for users.

4. **accounts.js**
   - Provides account details for the users.

---

## Project Setup

Follow these steps to set up and run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/MAHI01109/Cloud-Rank-Project.git

   ```
## Project Setup

Follow these steps to set up and run the project locally:

1. **Navigate into the project directory:**
```
   cd Cloud-Rank-Project
```
2. **Install dependencies:**
```
npm install
```
3. **Run the development server**
```
npm run dev
```
4. **Open the application in your browser**
```
http://localhost:5173
````
