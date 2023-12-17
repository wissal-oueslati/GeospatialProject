const express = require('express');
const path = require('path');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Configuration de la base de données
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'points',
    password: 'pgadmin',
    port: '5432',
});

app.use(express.static(path.join(__dirname, 'public')));

// Ajouter le gestionnaire de corps JSON pour les requêtes POST
app.use(express.json());

// Définir la route pour gérer les clics sur la carte et insérer le point dans la base de données
app.post('/insertPoint', async (req, res) => {
    try {
        console.log('Request Body:', req.body);  // Ajoutez cette ligne pour afficher le corps de la requête
        const { geometry } = req.body;

        const result = await pool.query('INSERT INTO points (geom) VALUES (ST_SetSRID(ST_GeomFromText($1), 4326)) RETURNING id;', [geometry]);
        console.log('Point inséré avec succès. ID :', result.rows[0].id);

        res.status(200).send('Point inséré avec succès.');
    } catch (error) {
        console.error('Erreur lors de l\'insertion du point :', error.message);
        res.status(500).send('Erreur lors de l\'insertion du point');
    }
});
app.post('/insertPolygon', async (req, res) => {
    try {
        const { geometry } = req.body;
        console.log('Request Body:', req.body);
        const result = await pool.query('INSERT INTO polygons (geom) VALUES (ST_SetSRID(ST_GeomFromGeoJSON($1), 4326)) RETURNING id;', [geometry]);
        console.log('Polygon inserted successfully. ID:', result.rows[0].id);

        res.status(200).send('Polygon inserted successfully.');
    } catch (error) {
        console.error('Error inserting polygon:', error.message);
        res.status(500).send('Error inserting polygon');
    }
});

app.post('/insertLine', async (req, res) => {
    try {
        const { geometry } = req.body;
        console.log('Request Body:', req.body);
        const result = await pool.query('INSERT INTO lines (geom) VALUES (ST_SetSRID(ST_GeomFromGeoJSON($1), 4326)) RETURNING id;', [geometry]);
        console.log('Line inserted successfully. ID:', result.rows[0].id);

        res.status(200).send('Line inserted successfully.');
    } catch (error) {
        console.error('Error inserting line:', error.message);
        res.status(500).send('Error inserting line');
    }
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
