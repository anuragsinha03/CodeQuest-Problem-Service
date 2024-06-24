# CodeQuest Problem Service
--------------------------------------------

## How routing is working in the project

- /api/v1/problems/ping
    - because the router starts with /api
        /api        -> /v1        -> /problems        -> /ping
        apiRouter   -> v1Router   -> problemRouter    -> problemController   -> Service Layer