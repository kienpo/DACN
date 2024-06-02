'use strict'
module.exports = function(app){
    var api = require('../controllers/APIController'); // Correct casing here
    app.post('/api/withdraw', api.withdraw);


    // "address": "0x66F42a9A8D6cBE70F932385A719121E16e922FF9"
    // "amount" : 50
};
