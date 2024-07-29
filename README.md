# CodeQuest Problem Service
--------------------------------------------

This microservice handles addition of problems and testcases along with solutions
for codequest platform.

To set up the project on your local machine do the following steps:

1. Clone the project
```
git clone https://github.com/anuragsinha03/CodeQuest-Problem-Service.git
```

2. Go inside the downloaded folder and install node modules

```
cd CodeQuest-Problem-Service && npm install
```

3. Create a new .env file in the root directory and set the following env variables
```
PORT=3000
```

4. Start the backend server
```
npm run dev
```

--------------------------------------------

## How routing is working in the project
Our project utilizes a multi-layered architecture to efficiently manage client requests. Here's a detailed breakdown of the process:

- Client Request Handling:
    - Any incoming request from the client is initially routed through multiple Express routers based on the specified API versions.

- Controller Layer:
    - The request is then forwarded to the controller layer. The controllers are responsible for handling the requests and redirecting them to the appropriate service layer.

- Service Layer:
    - In the service layer, the core business logic of the application resides. If the request requires database interaction, it is passed to the repository layer.

- Repository Layer:
    - The repository layer is where all database interactions occur. Using Mongoose queries, this layer handles CRUD operations and returns the necessary data or results.

- Response Flow:
    - The response flows back through the layers in the reverse order: from the repository layer to the service layer, then to the controller layer, and finally to the client.

- Architectural Flow:
    ![Multi-Layer Flow](/multilayer-flow.png)

## Benefits of Layered Architecture
 - Separation of Concerns: Each layer has a specific responsibility, making the codebase easier to manage and understand.
 - Decoupling: By isolating database interactions in the repository layer, we can easily migrate to a different database system if needed. This change would only require modifications in the repository layer without affecting the service layer, which contains the business logic.

 
- /api/v1/problems/ping
    - because the router starts with /api
        - /api        -> /v1        -> /problems        -> /ping
        - apiRouter   -> v1Router   -> problemRouter    -> problemController   -> Service Layer