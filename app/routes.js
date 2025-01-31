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

router.get("/rare-disease/referral/hpo/1/remove/:id", (req, res) => {
    const { id } = req.params
    if (req.session.data['hpoCollection'] !== undefined && req.session.data['hpoCollection'][id] !== undefined) {
        req.session.data['hpoCollection'].splice(id, 1)
    }
    res.redirect("/rare-disease/referral/hpo/1")
  })

router.get('/rare-disease/referral/edit', (req, res) => {
    // req.session.data['hpoCollection'] = []

    patientData = {
        'rare-clinical-indication': 'Intellectual disability - R29.4',
        'test-req': 'no',
        'rare-date-onset-year': 4,
        'rare-date-onset-month': 1,
        'rare-disease-penetrance': 'Incomplete',
        'rare-family-member-disease-status': 'Affected',
        'rare-relationship-picker': 'Mother',
        'rare-care-team': 'Great Ormond Street Hospital for Children NHS Foundation Trust',
        'rare-fname': 'Dr Sue',
        'rare-lname': 'Donim',
        'rare-email': 'Sue.donim@nhs.net',
        'rare-phone': '02089655244',
        'rare-org-contact': 'no',
        'rare-conditional_email': 'admin_GOSH_genetics@nhs.net',
        'rare-glh-picker': 'South East Genomic Laboratory Hub (GLH)',
        'hpoCollection': [
            {
            'hpo-term': 'Profound global developmental delay [HP:0012736]',
            'observed-proband': 'Present', 
            'observed-family-member': 'Absent'
        },
        {
            'hpo-term': 'Intellectual disability – profound [HP:0002187]',
            'observed-proband': 'Absent', 
            'observed-family-member': 'Present',
        }
        ],
    }

    req.session.data = patientData;

    res.redirect('/rare-disease/referral')
})
  
    
// Add your routes here - above the module.exports line

module.exports = router;
