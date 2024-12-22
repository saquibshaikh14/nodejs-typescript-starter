# **Node.js TypeScript Starter**

This repository provides a minimal and configurable starter template for building Node.js applications with TypeScript. It includes essential configurations and structure to help developers quickly bootstrap their projects.

---

## **Features**
- Fully configured **TypeScript** setup for Node.js.
- Pre-configured **ESLint** and **Prettier** for consistent code formatting and linting.
- **Nodemon** for automatic server restarts during development.
- Organized folder structure to easily scale your application.
- Ready-to-use scripts for development and production builds.

---

## **Getting Started**

### **Prerequisites**
Ensure you have the following installed:
- **Node.js** (>= 14.x)
- **npm** or **yarn**

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/saquibshaikh14/nodejs-typescript-starter.git
   cd nodejs-typescript-starter
   ```

2. Install dependencies:
   ```bash
   npm install
   # OR
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # OR
   yarn dev
   ```

4. Build for production:
   ```bash
   npm run build
   # OR
   yarn build
   ```

---

## **Project Structure**
```plaintext
nodejs-typescript-starter/
├── src/
│   ├── config/                     
│   │   └── server.config.ts        # Server configuration
│   ├── controllers/                # Controller logic for handling requests
│   ├── logger/                     
│   │   ├── consoleLogger.ts        # Logger for console output
│   │   ├── fileLogger.ts           # Logger for file output
│   │   └── index.ts                # Logger initialization
│   ├── middleware/                 
│   │   ├── errorHandlerMiddleware.ts  # Middleware to handle errors
│   │   ├── loadConfiguration.ts    # Middleware to load configurations
│   │   └── loggerMiddleware.ts     # Middleware for request logging
│   ├── models/                     # Data models and schemas
│   ├── routes/                     # API routes
│   ├── utils/                      # Utility functions and helpers
│   └── index.ts                    # Application entry point
├── logs                  # Output logs
├── dist/                 # Compiled output (generated after build)
├── .eslintrc.js          # ESLint configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
```

---

## **Scripts**
- `npm run clean` – Removes the `dist` directory to ensure a fresh build.  
- `npm run build` – Cleans the build directory, compiles TypeScript to JavaScript, and resolves TypeScript paths.  
- `npm run start` – Starts the application using the compiled JavaScript from the `dist` directory.  
- `npm run dev` – Runs the application in development mode with hot-reloading using **Nodemon**.


>  Modify based on need
---

## **Contributing**
We welcome contributions, modifications, and suggestions! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request to the `main` branch.

For suggestions or discussions, feel free to [open an issue](https://github.com/saquibshaikh14/nodejs-typescript-starter/issues).

---
