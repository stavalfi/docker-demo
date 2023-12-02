1. Run without Docker: `node index.js`
2. Run with Docker:
    1. `docker build -t stavalfi/cool-server:1.0.0 -f dockerfile ./`
    2. `docker run -it -p 8080:8080 stavalfi/cool-server:1.0.0 sh -c "node index.js"`
    3. Optional - sharing your image:
        1. `docker login`
        2. `docker push stavalfi/cool-server:1.0.0`