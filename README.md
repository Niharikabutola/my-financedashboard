# 💰 Financial Dashboard

A modern, responsive React application for tracking and analyzing personal financial activities. Built with React, Vite, and Recharts for data visualization.

## ✨ Features

### Core Functionality
- **Dashboard Overview**: Summary cards showing total balance, income, and expenses
- **Interactive Charts**: Line chart for balance trends and pie chart for spending breakdown
- **Transaction Management**: View, filter, sort, and search transactions
- **Role-Based Access**: Switch between Viewer (read-only) and Admin (full access) modes
- **Financial Insights**: Highest spending categories and monthly comparisons

### User Experience
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Animations**: Smooth fade-in and slide-in effects throughout the interface
- **Data Export**: Export transaction data to CSV format
- **Advanced Filtering**: Filter by type, category, and search functionality

## 🛠️ Technologies Used

- **Frontend Framework**: React 19.2.4
- **Build Tool**: Vite 8.0.1
- **Charts**: Recharts 3.8.1
- **Styling**: Custom CSS with CSS Variables
- **State Management**: React Context API + useState
- **Development**: ESLint for code quality

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js) or **yarn**

You can check your versions by running:
```bash
node --version
npm --version
```

## 🚀 Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd my-financedashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

   Or if you prefer yarn:
   ```bash
   yarn install
   ```

## 🏃‍♂️ Running the Application

### Development Mode
To start the development server with hot reload:

```bash
npm run dev
```

Or with yarn:
```bash
yarn dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Build for Production
To create a production build:

```bash
npm run build
```

Or with yarn:
```bash
yarn build
```

### Preview Production Build
To preview the production build locally:

```bash
npm run preview
```

Or with yarn:
```bash
yarn preview
```

### Code Linting
To run ESLint and check code quality:

```bash
npm run lint
```

Or with yarn:
```bash
yarn lint
```

## 📁 Project Structure

```
my-financedashboard/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── vite.svg
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.css
│   │   │   └── Dashboard.jsx
│   │   ├── Insights.css
│   │   ├── Insights.jsx
│   │   ├── ThemeContext.jsx
│   │   ├── Transactions.css
│   │   └── Transactions.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── index.js
│   └── main.jsx
├── package.json
├── vite.config.js
├── eslint.config.js
├── index.html
└── README.md
```

## 🎯 Usage

### Getting Started
1. Start the development server: `npm run dev`
2. Open your browser to `http://localhost:5173`
3. The app will load with sample transaction data

### Key Features Usage

#### Theme Switching
- Click the "Light Mode" / "Dark Mode" button in the top-right corner
- The theme persists across the interface with smooth transitions

#### Role Management
- Use the "Role" dropdown to switch between "Viewer" and "Admin" modes
- **Viewer Mode**: Read-only access to all data
- **Admin Mode**: Can add new transactions and edit existing ones

#### Transaction Management
- **Filtering**: Use dropdowns to filter by transaction type and category
- **Search**: Type in the search box to find transactions by category or amount
- **Sorting**: Click column headers to sort by date or amount
- **Adding Transactions**: In Admin mode, click "Add Transaction" button
- **Editing Transactions**: In Admin mode, click "Edit" on any transaction

#### Data Export
- Click the "Export CSV" button to download all transactions as a CSV file

#### Viewing Insights
- Check the Insights section for:
  - Highest spending category
  - Monthly income/expense comparisons with percentage changes

## 📱 Responsive Design

The application is fully responsive and works on:
- **Desktop**: Full feature set with side-by-side layouts
- **Tablet**: Adjusted layouts with proper spacing
- **Mobile**: Stacked layouts and touch-friendly controls

## 🔧 Customization

### Adding New Transactions
The app comes with sample data. To add more transactions programmatically, modify the `fetchTransactions` function in `src/App.jsx`.

### Styling
- Colors are managed through CSS variables in `src/App.css`
- Dark/light themes are defined in the same file
- Component-specific styles are in their respective CSS files

### Charts
- Charts are built using Recharts library
- Data processing happens in the component files
- Chart configurations can be modified in `src/components/Dashboard/Dashboard.jsx`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Run linting: `npm run lint`
5. Commit your changes: `git commit -am 'Add new feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## 📄 License

This project is for educational purposes. Feel free to use and modify as needed.

## 🆘 Troubleshooting

### Common Issues

**Port already in use:**
- Change the port in `vite.config.js` or kill the process using the port

**Dependencies not installing:**
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then run `npm install`

**Build fails:**
- Ensure all dependencies are installed
- Check for any ESLint errors and fix them

**Charts not displaying:**
- Ensure Recharts is properly installed
- Check browser console for any JavaScript errors

---

Built with ❤️ using React and Vite
