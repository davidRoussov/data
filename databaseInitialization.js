import { Pool } from "pg";
import config from './config';
import prompt from 'prompt';

const pool = new Pool(config.herokuPostgres);
pool.on('error', (err, client) => {
    console.error('idle client error', err.message, err.stack);
});

class DatabaseInitialization {

    confirmProceed() {
        return new Promise((resolve, reject) => {
            prompt.start();
            prompt.get([`enter 'yes' to confirm the deletion of the current database and the initialization of a new database`], (err, result) => { 
                const response = result[Object.keys(result)[0]];
                const proceed = ((response === 'yes' && !err) ? true : false);
                if (proceed) resolve(); 
                else reject();
            });
        });
    }

    createSomeTableForTesting() {
        const testTable1 = `CREATE TABLE test1 (hi integer);`;
        const testTable2 = `CREATE TABLE test2 (yo integer);`;

        return pool.query(testTable1)
            .then(() => pool.query(testTable2))
            .catch(error => console.error(error));
    }

    deleteTables() {
        const query = 
            `SELECT table_name
            FROM information_schema.tables
            WHERE table_schema='public'
            AND table_type='BASE TABLE';`;

        return pool.query(query)
            .then(result => result.rows.map(row => row.table_name))
            .then(tableNames => Promise.all(tableNames.map(name => pool.query(`DROP TABLE ${name}`))))
            .catch(error => console.error(error));
    }

    createTables() {
        const query = 
            `CREATE TABLE map_time (
                ID INT PRIMARY KEY NOT NULL,
                mass_time VARCHAR(100),
                mass_value NUMERIC
            )`;
        
        return pool.query(query);
    }

    run() {
        this.confirmProceed()   
            .then(this.createSomeTableForTesting)
            .then(this.deleteTables)
            .then(this.createTables)
            .catch(error => console.log(error));
    }
}

new DatabaseInitialization().run();