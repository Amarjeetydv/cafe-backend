// Use PostgreSQL instead of MySQL
const { Pool } = require('pg');
require('dotenv').config();

// Create a new pool using the DATABASE_URL from .env
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false // Required for Neon and many cloud Postgres providers
    }
});

// Test the connection
pool.connect((err, client, release) => {
    if (err) {
        console.error('Error connecting to PostgreSQL:', err.stack);
    } else {
        console.log('Connected to PostgreSQL!');
        release();
    }
});

module.exports = pool;