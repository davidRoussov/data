const schema = {
  mapTime: {}
};

class DatabaseInitialization {

  static init(db) {
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