\# 🏥 Hospital Management System



A full-stack web application to manage hospital operations including Doctors, Patients, Appointments, and Billing — built with \*\*Spring Boot\*\*, \*\*React.js\*\*, and \*\*MySQL\*\*.



\---



\## 🚀 Live Demo

> Coming soon



\---



\## 📌 Features



\- 👨‍⚕️ \*\*Doctor Management\*\* — Add, view, update, and delete doctor records

\- 🧑‍🤝‍🧑 \*\*Patient Management\*\* — Register and manage patient information

\- 📅 \*\*Appointment Scheduling\*\* — Book and track appointments between doctors and patients

\- 💳 \*\*Billing Module\*\* — Generate and manage patient bills

\- 🔐 \*\*User Authentication\*\* — Login system with user roles

\- 📊 \*\*Dashboard\*\* — Overview of hospital statistics



\---



\## 🛠️ Tech Stack



\*\*Backend\*\*

\- Java 17

\- Spring Boot

\- Spring Data JPA

\- Spring MVC (REST APIs)

\- MySQL

\- Maven



\*\*Frontend\*\*

\- React.js

\- Axios (API calls)

\- React Router DOM

\- Bootstrap

\- Vite



\---



\## 📁 Project Structure



```

hospital-management-system/

├── hms-backend/          # Spring Boot REST API

│   └── src/

│       └── main/java/

│           ├── model/        # Entity classes

│           ├── repository/   # JPA Repositories

│           ├── service/      # Business logic

│           └── controller/   # REST Controllers

│

└── hms-frontend/         # React.js Frontend

&#x20;   └── src/

&#x20;       ├── pages/        # Doctors, Patients, Appointments, Bills

&#x20;       ├── components/   # Navbar, Sidebar

&#x20;       └── services/     # API service (Axios)

```



\---



\## ⚙️ How to Run Locally



\### Prerequisites

\- Java 17+

\- Node.js 18+

\- MySQL



\### Backend Setup



```bash

cd hms-backend

\# Update src/main/resources/application.properties with your MySQL credentials

./mvnw spring-boot:run

```



\### Frontend Setup



```bash

cd hms-frontend

npm install

npm run dev

```



Open `http://localhost:5173` in your browser.



\---



\## 🔗 API Endpoints



| Method | Endpoint | Description |

|--------|----------|-------------|

| GET | `/api/doctors` | Get all doctors |

| POST | `/api/doctors` | Add a doctor |

| GET | `/api/patients` | Get all patients |

| POST | `/api/patients` | Add a patient |

| GET | `/api/appointments` | Get all appointments |

| POST | `/api/appointments` | Book an appointment |

| GET | `/api/bills` | Get all bills |

| POST | `/api/bills` | Create a bill |



\---



\## 👨‍💻 Author



\*\*Mohana Krishna S\*\*

\- GitHub: \[@krishOP7](https://github.com/krishOP7)

\- LinkedIn: \[linkedin.com/in/mohana-krishna](https://linkedin.com/in/mohana-krishna)



\---



\## 📄 License



This project is open source and available under the \[MIT License](LICENSE).

