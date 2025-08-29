# SecureFullStackApp

SecureFullStackApp is a full-stack application built with **Angular 13**, **Node.js**, and **MongoDB**, designed with security-first principles including AES/RSA encryption and OAuth2 authentication. This project demonstrates best practices in secure coding, access control, and vulnerability management.

---

## Features

* **Secure Full-Stack Implementation:**

  * Built with Angular 13 (frontend), Node.js (backend), and MongoDB (database).
  * Implements **AES/RSA encryption** for sensitive data storage and transmission.
  * OAuth2 authentication for secure user login and access control.

* **Root Cause Analysis & System Resilience:**

  * Conducted in-depth root cause analysis of security issues.
  * Designed sustainable solutions that **increase system resilience**.
  * Reduced downtime and mitigated recurring vulnerabilities.

* **Enhanced Security Posture:**

  * Integrated encryption techniques to secure data in transit and at rest.
  * Supports **real-time vulnerability identification** and threat detection.
  * Prepares system for SOC integration and proactive security monitoring.

---

## Tech Stack

* **Frontend:** Angular 13, TypeScript, RxJS, Angular Material
* **Backend:** Node.js, Express.js, crypto module
* **Database:** MongoDB
* **Security:** AES-256-GCM, RSA 2048-bit encryption, OAuth2 authentication
* **DevOps/Monitoring:** Optional integration with real-time vulnerability scanners

---

## Installation

### Backend

```bash
cd backend
npm install
node server.js
```

### Frontend

```bash
cd frontend
npm install
ng serve
```

Access the frontend at `http://localhost:4200` and ensure the backend API is running on the correct port.

---

## Usage

1. Register a user using OAuth2 login.
2. Create and store sensitive data (encrypted with AES/RSA).
3. Perform queries and updates securely with enforced access control.
4. Monitor logs for threat signals and vulnerabilities.

---

## Contribution

Feel free to fork this repository and submit PRs for improvements:

* Enhanced encryption algorithms.
* Integration with real-time SOC monitoring.
* Advanced access control rules.

---

## License

MIT License
