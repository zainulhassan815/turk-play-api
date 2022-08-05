# Ninja Tv Api
An api to access ninja tv database. Built for `Ninja Tv Android App` which you can download from [official website](https://ninjatv.xyz).

## Getting Started

### .env File
- Create a `.env` file in the `root` directory and add following fields.

    ```
    HOST=""
    PORT=3000
    USER="root"
    PASSWORD=""
    DB_HOST="localhost"
    DB_PORT="3306"
    DATABASE="turk_play"
    ```

- Run the following command to start a dev server.
    ```
    npm run dev
    ```

## Build Api
Since the source code is written in `Typescript`, it needs to be compiled down to `JavaScript`. Run the following command to build the api.

```shell
npm run build
```

This generates a `dist` folder that can be deployed.
