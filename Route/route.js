const express=require('express')
const router = express.Router()


const UserController= require("../controllers/userController")
const slotController= require("../controllers/slotController")
 const {loginCheck}= require("../middleware/authorization")
 const eventController= require("../controllers/eventController")
 const ticketController= require("../controllers/ticketController")
 const orderController= require("../controllers/orderController")


router.post("/register",UserController.createUser)
router.post("/login", UserController.loginUser)



router.post("/create",loginCheck,eventController.eventcreation)
router.post("/events",eventController.getevents)
router.put("/event/:eventId", eventController.updateEvent)
router.delete("/deleteEvent/:eventId",eventController.deleteEvent)







router.post("/createSlot",slotController.createSlot)
router.get("/slot/:eventId",slotController.fetchSlot)



router.post("/createTicket/:eventId",ticketController.ticketCreation)




router.post("/createOrder",orderController.createOrder)



// router.post("/books",Middleware.loginCheck, slotController.createBook)//1
// router.post("/books/:bookId/review", eventController.createReviewByBookId)//1
// router.put("/books/:bookId/review/:reviewId", eventController.updateReviews)

//**************************************GET API*****************************************************/

// router.get("/books", Middleware.loginCheck, slotController.getBooks)//2
// router.get("/books/:bookId",  Middleware.loginCheck,slotController.getBookDetailsById)//3
// router.put("/books/:bookId",  Middleware.loginCheck,slotController.updateDetails)//3
// router.delete("/books/:bookId",  Middleware.loginCheck,slotController.deleteBookById)//3
// router.delete("/books/:bookId/review/:reviewId", eventController.deleteReview)







module.exports= router;