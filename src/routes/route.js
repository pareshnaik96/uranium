const express = require('express');
const router = express.Router();
const productController= require("../controllers/productController")
const userController= require("../controllers/userController")
const orderController= require("../controllers/orderController")
const common= require("../middlewares/commonMiddleware")


router.post('/createProduct', productController.createProduct)

router.post('/createUser',common.mid,userController.createUser)

router.post('/createOrder',common.mid,orderController.createOrder)




module.exports = router;