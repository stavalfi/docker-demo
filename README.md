Repository: https://github.com/stavalfi/docker-demo

1. Run without Docker: `node index.js`
2. Run with Docker:
    1. Build an image - `docker build -t stavalfi/cool-server:1.0.0 -f dockerfile ./`
    2. Run an image in a container - `docker run -it -p 8080:8080 stavalfi/cool-server:1.0.0 sh -c "node index.js"`
    3. Enter to a container - `docker run -it -p 8080:8080 stavalfi/cool-server:1.0.0 sh`