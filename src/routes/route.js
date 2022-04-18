// const express = require('express');
// const router = express.Router();

// const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

// module.exports = router;

const express= require('express');
const router=express.Router();

const authorController= require("../controllers/newAuthorController")
const publisherController= require("../controllers/newPublisherController")
const bookController= require("../controllers/newBookController")

router.post("/createNewAuthor",authorController.createAuthor)
router.post("/createNewPublisher",publisherController.createPublisher)
router.post("/createNewBook",bookController.createBook)
router.get("/populateNewBook",bookController.populateBook)
router.put("/updateNewBooks",bookController.updateBooks)

module.exports=router;