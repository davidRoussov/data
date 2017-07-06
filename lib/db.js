import { Pool } from "pg";
import config from "../config";

const pool = new Pool(config.herokuPostgres);
pool.on('error', (err, client) => {
    console.error('idle client error', err.message, err.stack);
});

export default function query(text, values, callback) {
    return pool.query(text, values, callback);
};