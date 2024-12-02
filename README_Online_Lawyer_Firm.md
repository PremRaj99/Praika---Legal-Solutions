
# Online Lawyer Firm Website

## Project Overview
This project is an online platform where users can:
- Consult with lawyers 24/7.
- File and manage legal documentation.
- Hire advocates for cases based on their zones.
Additionally, lawyers can join as freelancers, get verified, and work on cases within their assigned zones.

## Features
1. **User Features**
   - File legal cases and track their status.
   - Consult with lawyers in real-time.
   - Manage payment history and profiles.

2. **Lawyer Features**
   - Join as a freelancer and get verified.
   - Get assigned cases zone-wise.
   - Track earnings and manage schedules.

3. **Admin Features**
   - Verify and manage lawyers.
   - Oversee user activities and transactions.
   - Manage cases, zones, and reviews.

## Tech Stack
- **Frontend**: React.js, Redux, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **File Storage**: Multer and Cloudinary

## Database Schemas
### Users
- Fields: `name`, `email`, `password`, `role`, `profile`

### Lawyers
- Fields: `name`, `email`, `password`, `profile`, `verificationStatus`, `earnings`

### Cases
- Fields: `userId`, `lawyerId`, `zone`, `status`, `details`

### Consultations
- Fields: `userId`, `lawyerId`, `schedule`, `transcript`

### Transactions
- Fields: `userId`, `lawyerId`, `amount`, `status`

### Reviews
- Fields: `userId`, `lawyerId`, `rating`, `feedback`

## Backend API Routes
### User Routes
- `POST /api/users/signup`: Signup a new user.
- `POST /api/users/login`: Login a user.
- `GET /api/users/profile`: Fetch user profile.

### Lawyer Routes
- `POST /api/lawyers/signup`: Signup a new lawyer.
- `GET /api/lawyers/verify`: Verify a lawyer.
- `GET /api/lawyers/profile`: Fetch lawyer profile.

### Case Routes
- `POST /api/cases`: File a new case.
- `GET /api/cases`: Get all cases for a user or lawyer.
- `PATCH /api/cases/:id`: Update case status.

### Admin Routes
- `GET /api/admin/dashboard`: Fetch platform metrics.
- `GET /api/admin/lawyers`: Manage lawyers.
- `GET /api/admin/cases`: Manage cases.

## Frontend Pages and Routes
### Common Pages
- Home: `/`
- About Us: `/about`
- Contact Us: `/contact`
- Login: `/login`
- Signup: `/signup`

### User Pages
- Dashboard: `/user/dashboard`
- File Case: `/user/file-case`
- My Cases: `/user/cases`
- Consultations: `/user/consultations`
- Profile: `/user/profile`

### Lawyer Pages
- Dashboard: `/lawyer/dashboard`
- Assigned Cases: `/lawyer/cases`
- Earnings: `/lawyer/earnings`
- Profile: `/lawyer/profile`

### Admin Pages
- Dashboard: `/admin/dashboard`
- Manage Users: `/admin/users`
- Manage Lawyers: `/admin/lawyers`
- Manage Cases: `/admin/cases`
- Manage Zones: `/admin/zones`

## Installation and Setup
1. Clone the repository: `git clone https://github.com/PremRaj99/Praika---Legal-Solutions.git`
2. Install dependencies for backend: `npm install`
3. Install dependencies for frontend: `cd client && npm install`
4. Start development server:
   - Backend: `npm run dev`
   - Frontend: `npm start`

## Contribution
Feel free to contribute to this project by opening issues or submitting pull requests.

---
