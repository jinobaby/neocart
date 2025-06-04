var router = require('express').Router();

// Import the Admin model
//localhost:27017/Admin/Admin-reg {email, password}
router.post('/Admin-reg', async (req, res) => {
    try {
        var newAdmin = new AdminSchema({
            adminEmail: req.body.adminEmail,
            adminPassword: req.body.adminPassword
        });
    } catch (error) {
        console.error('Error during admin registration:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
})