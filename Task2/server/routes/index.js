// require express, router
const express = require('express');
const router = express.Router();
const userController = require('../controllers/index');

// router, request
router.post('/user/create',userController.newUserCreate);
router.get('/user/details', userController.getUserDetails);
router.get('/:id', userController.getUser);
router.delete('/:id', userController.deleteUser);
router.put('/:id',userController.updateUser);


// export the router
module.exports = router;


