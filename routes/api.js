var express     = require('express'),
    router      = express.Router(),
    db          = require('../models'),
    dataHelpers = require('../helpers/data');
    statsHelpers = require('../helpers/stats'),
    // settingsHelpers = require('../helpers/settings');

router.route('/data')
    .get(dataHelpers.getData)
    .post(dataHelpers.createData)
    .delete(dataHelpers.deleteData);

router.route('/data/:id')
    .get(dataHelpers.getOneData)
    .put(dataHelpers.editData)
    .delete(dataHelpers.deleteOneData);

router.route('/settings')
    .get()
    .put();

router.route('/statistics')
    .get()
    .put()
    .delete(statsHelpers.resetStats);

module.exports = router;

    


