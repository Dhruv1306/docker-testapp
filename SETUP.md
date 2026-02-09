# TestApp - Docker Setup Guide

A simple Node.js application with MongoDB database and Mongo Express admin panel.

---

## 📋 Prerequisites

Before you start, make sure you have:

- ✅ [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running

---

## Note:

- If you just want to check the working of this app, then,  in the 1st Step, you don't need to clone / fork this repo. You just need to download / copy the `compose.yaml` file into your machine. and can carry on with the Step 2.

---

## 🚀 How to Run (Step by Step)

### Step 1: Fork this repo

Fork or clone this repo to your computer.

### Step 2: Open Terminal in this folder

- **Windows:** Right-click inside the folder → "Open in Terminal"
- **Mac/Linux:** Open Terminal and `cd` to this folder

### Step 3: Run the app

```bash
docker compose up -d
```

### Step 4: Wait for download

First time? Docker will download the required images. This may take a few minutes.

### Step 5: Open in browser

| Service                 | URL                   | What is it?           |
| ----------------------- | --------------------- | --------------------- |
| **App**           | http://localhost:5050 | Your main application |
| **Mongo Express** | http://localhost:8081 | Database admin panel  |

---

## 🛑 How to Stop

```bash
docker compose down
```

---

## 📦 What's Included?

This setup runs **3 containers**:

| Container     | Image                | Port  | Purpose           |
| ------------- | -------------------- | ----- | ----------------- |
| testapp       | dhruvdalal/testapp   | 5050  | Main Node.js app  |
| mongodb       | mongo:latest         | 27017 | Database          |
| mongo-express | mongo-express:latest | 8081  | Database admin UI |

---

## 🔐 Default Credentials

**MongoDB & Mongo Express:**

- Username: `admin`
- Password: `qwerty`

⚠️ **Note:** Change these passwords before using in production!

---

## 💾 Data Persistence

Your MongoDB data is saved in a Docker volume called `mongodb_data`. This means:

- ✅ Data survives container restarts
- ✅ Data survives `docker compose down`
- ❌ Data is deleted only if you run `docker compose down -v`

---

## 🔧 Useful Commands

| Command                         | What it does                      |
| ------------------------------- | --------------------------------- |
| `docker compose up -d`        | Start all containers (background) |
| `docker compose up`           | Start all containers (see logs)   |
| `docker compose down`         | Stop all containers               |
| `docker compose down -v`      | Stop all + delete data            |
| `docker compose ps`           | See running containers            |
| `docker compose logs`         | See all logs                      |
| `docker compose logs testapp` | See app logs only                 |
| `docker compose restart`      | Restart all containers            |

---

## ❓ Troubleshooting

### "Port already in use"

Another app is using the port. Stop it or change the port in `compose.yaml`.

### Mongo Express not loading?

Wait 30 seconds. MongoDB needs time to fully start before Mongo Express can connect.

### Need to see what's happening?

```bash
docker compose logs -f
```

---

## 📁 Files

```
📂 Your Folder
├── compose.yaml    ← Docker Compose configuration
├── SETUP.md        ← This file
└── ...
```

---

Made with ❤️ using Docker
