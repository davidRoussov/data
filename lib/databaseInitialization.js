import Datastore from 'nedb';

const db = new Datastore({ filename: './db/db', autoload: 'true' });

const schema = {
  mapTime: {}
};

class DatabaseInitialization {

  static init() {
    return new Promise((resolve, reject) => {
      db.insert(schema, (error, newDocument) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }
}

export default DatabaseInitialization;