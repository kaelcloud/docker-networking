🐳 Docker Networking - Microservices Application

🎯 Overview
A 3-tier microservices application demonstrating Docker networking, service discovery, and container orchestration using Docker Compose.

Architecture:

Browser → Frontend (Nginx :8080)
          ↓
Frontend → Backend (Node.js :3000)
          ↓
Backend → Database (MySQL :3306)

🏗️ Architecture Diagram

+------------------+       +------------------+       +------------------+
|   Frontend       | --->  |   Backend        | --->  |      Database    |
| (Nginx :8080)    |       | (Node.js :3000)  |       | (MySQL :3306)    |
+------------------+       +------------------+       +------------------+
            \___________________________________________/
                       myapp-network (bridge)

🛠️ Tech Stack
| Component     | Technology        | Version  |
|-----------    |-------------      |----------|
| Frontend      | Nginx             | Alpine   |
| Backend       | Node.js + Express | 18-alpine|
| Database      | MySQL             | 8.0      |
| Orchestration | Docker Compose    | 3.8      |

⚙️ Prerequisites
- Docker Desktop 4.0+
- Docker Compose 2.0+
- 2GB RAM minimum  
- Ports 8080 and 3000 available

Check installation:

docker --version
docker-compose --version

🚀 Quick Start

# Clone repository
git clone https://github.com/kaelcloud/Docker-Networking.git
cd docker-networking

# Build & run containers
docker-compose up -d --build

Access:
- Frontend → http://localhost:8080  
- Backend → http://localhost:3000/health  

📂 Project Structure

docker-networking/
├── docker-compose.yml
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── Dockerfile
│   └── index.html
└── database/
    └── init.sql

🔌 API Endpoints
| Method  | Endpoint       | Description    |
|---------|-----------     |-------------   |
| GET     | /health        | Health check   |
| GET     | /api/users     | Get all users  |
| GET     | /api/users/:id | Get user by ID |

Example:

curl http://localhost:3000/api/users 

🧪 Testing

# Health check
curl http://localhost:3000/health

# Check containers
docker-compose ps

# Enter backend & ping database
docker exec -it backend sh
ping database
exit

🧱 Database Schema

sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  role VARCHAR(100)
);

Sample Data: Ahmad (DevOps), Siti (SysEng), Ali (Backend), Fatimah (Frontend), Kumar (DBA)

🩺 Troubleshooting (Quick Fix)

Port in Use:  
→ Change exposed ports in docker-compose.yml or stop conflicting containers.  

Backend can’t reach DB:  
→ Run docker-compose logs backend, ensure DB is healthy.  

DB not ready:  
→ Wait for DB health check → docker-compose ps.

💡 What I Learned
- Docker custom bridge networks  
- Service discovery via container names  
- Multi-container orchestration  
- Persistent volumes  
- Health checks & dependencies  
- Network isolation & security best practices  

🚀 Next Steps
- Add authentication & HTTPS  
- Implement CI/CD pipeline  
- Add monitoring (Prometheus/Grafana)  
- Deploy to Kubernetes  

👤 Author
Muhammad Hazran Hafiz bin Ahmad  
GitHub: [@kaelcloud](https://github.com/kaelcloud)  
LinkedIn: [[Muhammad Hazran Hafiz](https://www.linkedin.com/in/muhammad-hazran-hafiz-ahmad-6b927a141/)]


