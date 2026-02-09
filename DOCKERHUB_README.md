# dhruvdalal/testapp

A Node.js application with MongoDB database and Mongo Express admin panel.

---

## Prerequisites

Before you start, make sure you have:

- ✅ [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running

That's it! You don't need Node.js, MongoDB, or anything else installed.

---

## Quick Start

### Step 1: Create a Docker Network

```bash
docker network create mynetwork
```

### Step 2: Pull the image

```bash
docker pull dhruvdalal/testapp:latest
```

### Step 3: Start MongoDB (Required)

This app needs MongoDB to run. Start it first:

```bash
docker run -d --name mongodb --network mynetwork -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=qwerty mongo:latest
```

### Step 4: Start Mongo Express (Database Admin Panel)

```bash
docker run -d --name mongo-express --network mynetwork -p 8081:8081 -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=qwerty -e ME_CONFIG_MONGODB_URL=mongodb://admin:qwerty@mongodb:27017/ mongo-express:latest
```

### Step 5: Start the App

```bash
docker run -d --name testapp --network mynetwork -p 5050:5050 -e MONGO_DB_USERNAME=admin -e MONGO_DB_PWD=qwerty -e MONGO_URL=mongodb://admin:qwerty@mongodb:27017/ dhruvdalal/testapp:latest
```

### Step 6: Open in Browser

| Service       | URL                   |
| ------------- | --------------------- |
| App           | http://localhost:5050 |
| Mongo Express | http://localhost:8081 |

---

## Images Required

| Image                    | Purpose                         |
| ------------------------ | ------------------------------- |
| `dhruvdalal/testapp`   | Main application                |
| `mongo:latest`         | MongoDB database (required)     |
| `mongo-express:latest` | Database admin panel (optional) |

---

## Ports

| Port  | Service       |
| ----- | ------------- |
| 5050  | App           |
| 27017 | MongoDB       |
| 8081  | Mongo Express |

---

## Environment Variables

### For MongoDB

| Variable                   | Value  |
| -------------------------- | ------ |
| MONGO_INITDB_ROOT_USERNAME | admin  |
| MONGO_INITDB_ROOT_PASSWORD | qwerty |

### For Mongo Express

| Variable                        | Value                                 |
| ------------------------------- | ------------------------------------- |
| ME_CONFIG_MONGODB_ADMINUSERNAME | admin                                 |
| ME_CONFIG_MONGODB_ADMINPASSWORD | qwerty                                |
| ME_CONFIG_MONGODB_URL           | mongodb://admin:qwerty@mongodb:27017/ |

### For TestApp

| Variable          | Value                                 |
| ----------------- | ------------------------------------- |
| MONGO_DB_USERNAME | admin                                 |
| MONGO_DB_PWD      | qwerty                                |
| MONGO_URL         | mongodb://admin:qwerty@mongodb:27017/ |

---

## Stop Containers

```bash
docker stop testapp mongodb mongo-express
```

## Remove Containers

```bash
docker rm testapp mongodb mongo-express
```

---

## Need Help?

Check if containers are running:

```bash
docker ps
```

Check logs:

```bash
docker logs testapp
```
