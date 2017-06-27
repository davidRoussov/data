import { Pool } from "pg";
import config from './config';
import prompt from 'prompt';

const pool = new Pool(config.postgres);

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

    deleteTables() {
        console.log("hello");
    }
}

new DatabaseInitialization()
    .confirmProceed()
    .then(this.deleteTables)
    .catch(error => console.log("nope"));