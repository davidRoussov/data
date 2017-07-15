import Datastore from 'nedb';
const db = new Datastore({ filename: './db/db', autoload: 'true' });

class MapTime {
    static getData(category) {
      return new Promise((resolve, reject) => {
        db.findOne({}, (error, document) => {
          if (error) reject(error);
          else {
            const data = document.mapTime[category].sort((a, b) => new Date(b.time) - new Date(a.time));
            resolve(data);
          }
        });
      });
    }

    static createNewValue(category, newValue) {
      return new Promise((resolve, reject) => {
        if (!newValue.hasOwnProperty('time') || !newValue.hasOwnProperty('value')) {
          reject(new Error('the newValue is missing either the time or the value'));
        } else {
          db.findOne({}, (error, document) => {
            if (document.mapTime && document.mapTime[category]) {
                document.mapTime[category].push(newValue);
                db.update({}, document, {}, (error, numReplaced) => {
                  resolve();
                });
            } else {
              reject(new Error('The database is missing either the mapTime property or mapTime[category]'));
            }
          });
        }
      });
    }
}

export default MapTime;