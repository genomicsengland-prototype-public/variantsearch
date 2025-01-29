// External dependencies
const express = require('express');
const router = express.Router();

// Run this code when a form is submitted to 'tumour-type-answer'
router.post('/tumour-type-answer', function (req, res) {

    // Make a variable and give it the value from 'tumour-type'
    var tumourType = req.session.data['tumour-type']
    
    // Check whether the variable matches a condition
    if (tumourType == "Solid tumour"){
    // Send user to next page
    res.redirect('/cancer/referral/tumour-type/solid')
    } else {
    // Send user to ineligible page
    res.redirect('/cancer/referral/tumour-type/liquid')
    }
    
    })


router.post('/rare-disease/referral/test/test-request-summary', function (req, res) {
    if (!req.session.data['rare-add-panel-list']) {
        req.session.data['rare-add-panel-list'] = []
    }
    req.session.data['rare-add-panel-list'].push(req.session.data['rare-add-panel'])
    res.redirect('/rare-disease/referral/test/test-request-summary')
})

router.get('/rare-disease/referral/test/test-request-summary/:id', function (req, res) {
    const { id } = req.params
    req.session.data['rare-add-panel-list'].splice(id, 1)
    res.redirect('/rare-disease/referral/test/test-request-summary')
})
    
// Add your routes here - above the module.exports line

module.exports = router;
