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
}

export default MapTime;