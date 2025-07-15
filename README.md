# 🛵 Smart Detection of Motorcycle Helmets and License Plate

A web-based dashboard designed to **monitor and detect motorcycle traffic violations**, specifically focusing on **helmet use and license plate recognition**. This system provides real-time insights and historical data for traffic enforcement authorities, promoting safer roads through smart surveillance.

---

## 🚀 Tech Stack

### Frontend

- **React (TypeScript)** – Component-based frontend library for building a scalable UI
- **TanStack Router** – Type-safe routing and page navigation
- **Tailwind CSS** – Utility-first CSS framework for responsive and modern design
- **shadcn/ui** – Accessible and reusable UI components

---

## ⚙️ Features

### 📊 Dashboard
- Real-time statistics on violations
- Visual summaries of helmet and license plate detections
- Filtering and sorting of key metrics

### 🎥 Live Camera Surveillance
- Real-time video streaming from monitoring zones
- Detection overlays for helmets and license plates

### 👥 Team Members
- Role-based access for admins, enforcers, and developers
- Manage and display authorized personnel

### 📂 Violation Logs
- Chronological list of detected violations
- Includes timestamp, image snapshot, location, and vehicle plate
- Export logs for reporting and analytics

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/karlosM1/helmet-license-detection-dashboard.git
cd helmet-license-detection-dashboard

# Install dependencies
npm install

# Start the development server
npm run dev
```
## 📁 Prokect Structure
```bash
.
├── src/
│   ├── components/       # Reusable UI components
│   ├── features/         # Main feature modules (dashboard, logs, etc.)
│   ├── routes/           # TanStack router configuration
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utility functions and helpers
```
## 🤝 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests for improvements or new features.
