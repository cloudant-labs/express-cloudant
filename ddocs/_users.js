var couchapp = require('couchapp');

ddoc = {
    // name of the design doc
    _id: '_design/queries',
    views: {
      // view code goes here
    },
    lists: {
      // list code goes here
    },
    shows: {
      // show code goes here
    }
};

// uncomment the line below to push this to Cloudant
// module.exports = ddoc;