import Datastore from 'nedb';
import dbInit from './databaseInitialization';
let db = new Datastore({ filename: './db/db', autoload: 'true' });

class MapTime {
    static getData(category) {
      return new Promise((resolve, reject) => {
        db.findOne({}, (error, document) => {
          if (error) reject(error);
          else {
            if (!document || !document.mapTime) {
              dbInit.init(db)
                .then(() => resolve([]))
                .catch(error => reject(error));
            } else if (!document.mapTime[category]) {
              resolve([]);
            } else {
              const data = document.mapTime[category].sort((a, b) => new Date(b.time) - new Date(a.time));
              resolve(data);
            }
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
            if (document.mapTime) {
              if (document.mapTime[category]) {
                  document.mapTime[category].push(newValue);
                  db.update({}, document, {}, (error, numReplaced) => {
                    if (error) {
                      reject(error);
                    } else {
                      resolve();
                    }
                  });
              } else {
                document.mapTime[category] = [newValue];
                db.update({}, document, {}, (error, numReplaced) => {
                  if (error) {
                    reject(error);
                  } else {
                    resolve();
                  }
                });
              }
            } else {
              dbInit.init(db)
                .then(() => {
                  db.findOne({}, (error, document) => {
                    if (error) {
                      reject(error);
                    } else {
                      document.mapTime[category] = [newValue];
                      db.update({}, document, {}, (error, numReplaced) => {
                        if (error) {
                          reject(error);
                        } else {
                          resolve();
                        }
                      });
                    }
                  });               
                })
                .catch(error => reject(error));
            }
          });
        }
      });
    }
}

export default MapTime;