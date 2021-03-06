import Database from "./core/infra/data/connections/Database";
import App from "./core/presentation/App";
import dotenv from "dotenv";
import "reflect-metadata";

dotenv.config({
    path: "./../.env",
});

new Database()
    .openConnection()
    .then((_) => {
        const app = new App();
        const port = process.env.PORT || '8080';

        app.init();
        app.start(parseInt(port));
    })
    .catch(console.error);
