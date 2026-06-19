const express = require("express");
const sqlite3 = require("sqlite3");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("./tareas.db");

db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS tareas(
            id INTEGER PRIMARY KEY,
            titulo TEXT,
            url TEXT
        )
    `);

    db.run("DELETE FROM tareas");

    db.run(`
        INSERT INTO tareas VALUES
        (1,'¿Cuál es la relación entre métodos HTTP y MySQL con Node.js? ¿Qué es un cURL?','https://lh3.googleusercontent.com/drive-storage/AJQWtBNypEHKmIXtYw_LvCp02oFb4Koat97Fb7EZ_ZUq_ryVdq8ZG95NpKKAdUdUy5ZrMQ7GdIhwDFLgt-RMS54cJ66FhwLNOBeHSC-kiaJQwAOp_qLBlQ=w1920-h868?auditContext=forDisplay')
    `);

    db.run(`
        INSERT INTO tareas VALUES
        (2,'Juego de dados','https://docs.google.com/document/d/1UmsnfoMS_TL9cCBEFJoaW8IF0uPaKIdJ/edit')
    `);

    db.run(`
        INSERT INTO tareas VALUES
        (3,'Tablas de multiplicar','https://docs.google.com/document/d/1t1laBBUm6gkavwYlks4aIQFdOsxdlFeMAsZSGOSaI1s/edit?tab=t.0')
    `);

});

app.get("/tareas", (req, res) => {

    db.all("SELECT * FROM tareas", [], (err, rows) => {

        if (err) {
            res.status(500).json(err);
        } else {
            res.json(rows);
        }

    });

});

app.listen(3000, () => {
    console.log("Servidor iniciado en puerto 3000");
});