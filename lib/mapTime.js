import Datastore from 'nedb';
import dbInit from './databaseInitialization';
import uuid from 'uuid/v1';
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
            } else {
              const data = document.mapTime.filter(mapping => mapping._id === category)[0].data;
              if(data.length === 0) {
                resolve([]);
              } else {
                const sorted = data.sort((a, b) => new Date(b.time) - new Date(a.time));
                resolve(sorted);
              }
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
          // adding an id to the record
          const record = Object.assign({}, newValue, { _id: uuid() });

          db.findOne({}, (error, document) => {
            if(error) reject(error);
            else {
              const added = document.mapTime.map(mapping => {
                if(mapping._id === category) {
                  const newMapping = Object.assign({}, mapping);
                  newMapping.data.push(record);
                  return newMapping;
                } else {
                  return mapping;
                }
              });
              document.mapTime = added;

              db.update({}, document, {}, (error, numReplaced) => {
                if(error) reject(error);
                else resolve();
              });
            }
          });
        }
      });
    }

    static createNewMapping(name) {
      return new Promise((resolve, reject) => {
        db.findOne({}, (error, document) => {
          if (error) reject(error);
          else {
            if (!document || !document.mapTime) {
              dbInit.init(db)
                .then(() => this.createNewMapping(name))
                .catch(error => reject(error));
            } else {
              document.mapTime.push({
                _id: uuid(),
                name,
                data: []
              });
              db.update({}, document, {}, (error, numReplaced) => {
                if (error) reject(error);
                else resolve();
              });
            }
          }
        });
      });
    }

    static getAllMappings() {
      return new Promise((resolve, reject) => {
        db.findOne({}, (error, document) => {
          if (error) reject(error);
          else {
            if (!document || !document.mapTime) {
              dbInit.init(db)
                .then(() => resolve([]))
                .catch(error => reject(error));
            } else {
              const mappings = document.mapTime.reduce((acc, current) => {
                acc.push({
                  id: current._id,
                  name: current.name
                });

                return acc;
              }, []);
              resolve(mappings);
            }
          }
        });
      });
    }

    static deleteMapping(categoryID) {
      return new Promise((resolve, reject) => {
        db.findOne({}, (error, document) => {
          if(error) reject(error);
          else {
            const removed = document.mapTime.filter(mapping => mapping._id !== categoryID);
            document.mapTime = removed;
            db.update({}, document, {}, (error, numReplaced) => {
              if (error) reject(error);
              else resolve();
            });
          }
        });
      });
    }
}

export default MapTime;