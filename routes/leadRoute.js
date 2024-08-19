const express = require('express');
const router = express.Router();
const Lead = require('../models/lead');

router.post('/lead', async (req, res) => {

    const { email } = req.body;
    const lead = new Lead({ email });
    try {

        await lead.save();
        return res.status(200).json({});
    } catch (error) {

        const { email } = error.errors;
        // console.log(email.message)
        if (error.errors.email) {
            return res.status(400).json({ message: email.message })
        }

        return res.status(500)
    }
})

module.exports = router;