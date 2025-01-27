// External dependencies
const express = require('express');

const router = express.Router();

// Run this code when a form is submitted to 'tumour-type-answer'
router.post('/tumour-type-answer', function (req, res) {

    // Make a variable and give it the value from 'tumour-type'
    var tumourType = req.session.data['tumour-type']
    
    // Check whether the variable matches a condition
    if (tumourType == "solid"){
    // Send user to next page
    res.redirect('/cancer/referral/tumour-type/solid')
    } else {
    // Send user to ineligible page
    res.redirect('/cancer/referral/tumour-type/liquid')
    }
    
    })

    
// Add your routes here - above the module.exports line

module.exports = router;
