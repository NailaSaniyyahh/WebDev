
# Project Setup and Installation Guide

Follow the steps below to set up and run the project on your local machine.

## Steps to Set Up the Project

### 1. Open Git Bash
Launch Git Bash or any terminal you prefer.

### 2. Navigate to GitHub Repository
Go to the GitHub repository for this project.

### 3. Copy the Repository URL
Copy the URL of the repository from GitHub.

### 4. Clone the Repository
In Git Bash, run the following command to clone the repository:
```
git clone <repository_url>
```

### 5. Navigate to the Project Folder
Navigate into the project folder by running:
```
cd <folder_name>
```

### 6. Open the Project in VS Code
Open the project in VS Code using the following command:
```
code .
```

### 7. Create a `.env` File in the Root Directory
In the root folder, create a `.env` file with the following contents:

```
PORT=5000
JWT_SECRET=mysecretkey
NODE_ENV=development
MAILTRAP_TOKEN=de869588cb715776ed3b1fd242230c4a
MAILTRAP_ENDPOINT=https://send.api.mailtrap.io/
CLIENT_URL=http://localhost:5173

DB_HOST=localhost
DB_PORT=2306
DB_USER=root
DB_PASS=root
DB_NAME=thefilm
```

### 8. Navigate to the Frontend Folder
In the terminal, type the following command to enter the frontend directory:
```
cd frontend
```

### 9. Create `.env` and `.env.production` Files in the Frontend Folder
Create two environment files:

#### `.env`
```
VITE_API_URL=http://localhost:5000
```

#### `.env.production`
```
VITE_API_URL=http://localhost:5000
```

### 10. Return to the Root Directory
After creating the environment files, return to the root directory by typing:
```
cd ..
```

### 11. Open Docker
Launch Docker on your system.

### 12. Build and Start Containers
Run the following command to start the containers:
```
docker compose up -d
```

### 13. Verify Containers are Running
Check that the containers are successfully running.

### 14. Access the Localhost Link
After the build is complete, access the application by opening the localhost link in your browser.

### 15. Login as User
Use the following credentials to log in as a user:
- Email: nailasaniyyah81@gmail.com
- Password: Nailanai30

### 16. Login as Admin (to Access CMS)
Use the following credentials to log in as an admin:
- Email: enderisgod69@gmail.com
- Password: Farrel123!

### 17. Registration Restrictions
Note: Registrations can only be done using the email from step 16 (admin credentials) due to restricted access.

### 18. End
You are all set! Now, you can begin using the project.
