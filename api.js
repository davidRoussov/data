import express from 'express';
import mapTime from './lib/mapTime';

const massHistory = [
  {
    "date": "2012-04-30T14:00:00.000Z",
    "mass": 58.13
  },
  {
    "date": "2012-04-29T14:00:00.000Z",
    "mass": 53.98
  },
  {
    "date": "2012-04-26T14:00:00.000Z",
    "mass": 67
  },
  {
    "date": "2012-04-25T14:00:00.000Z",
    "mass": 89.7
  },
  {
    "date": "2012-04-24T14:00:00.000Z",
    "mass": 99
  },
  {
    "date": "2012-04-23T14:00:00.000Z",
    "mass": 130.28
  },
  {
    "date": "2012-04-22T14:00:00.000Z",
    "mass": 166.7
  },
  {
    "date": "2012-04-19T14:00:00.000Z",
    "mass": 234.98
  },
  {
    "date": "2012-04-18T14:00:00.000Z",
    "mass": 345.44
  },
  {
    "date": "2012-04-17T14:00:00.000Z",
    "mass": 443.34
  },
  {
    "date": "2012-04-16T14:00:00.000Z",
    "mass": 543.7
  },
  {
    "date": "2012-04-15T14:00:00.000Z",
    "mass": 580.13
  },
  {
    "date": "2012-04-12T14:00:00.000Z",
    "mass": 605.23
  },
  {
    "date": "2012-04-11T14:00:00.000Z",
    "mass": 622.77
  },
  {
    "date": "2012-04-10T14:00:00.000Z",
    "mass": 626.2
  },
  {
    "date": "2012-04-09T14:00:00.000Z",
    "mass": 628.44
  },
  {
    "date": "2012-04-08T14:00:00.000Z",
    "mass": 636.23
  },
  {
    "date": "2012-04-04T14:00:00.000Z",
    "mass": 633.68
  },
  {
    "date": "2012-04-03T14:00:00.000Z",
    "mass": 624.31
  },
  {
    "date": "2012-04-02T14:00:00.000Z",
    "mass": 629.32
  },
  {
    "date": "2012-04-01T14:00:00.000Z",
    "mass": 618.63
  },
  {
    "date": "2012-03-29T13:00:00.000Z",
    "mass": 599.55
  },
  {
    "date": "2012-03-28T13:00:00.000Z",
    "mass": 609.86
  },
  {
    "date": "2012-03-27T13:00:00.000Z",
    "mass": 617.62
  },
  {
    "date": "2012-03-26T13:00:00.000Z",
    "mass": 614.48
  },
  {
    "date": "2012-03-25T13:00:00.000Z",
    "mass": 606.98
  }
];  


export default (api) => {

  // pg.defaults.ssl = true;
  // pg.connect(config.postgres, (err, client) => {
  //   if (err) {
  //     console.log("error");
  //     console.error(err);
  //   } else {
  //     console.log("SUCCESS!");
  //   }
  // });


  api.get('/api', function (req, res) {
      res.set('Content-Type', 'application/json');
      res.send(massHistory);

      console.log(mapTime.test());
      
  });


    return api;
};