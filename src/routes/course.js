const express = require('express')
const router = express.Router()
const { verifyJWT_MW } = require('../middlewares/auth.mw')

const { get_courses ,get_all_courses,create_courses} = require('../controllers/course.controller')

router.post('/create' ,create_courses)
router.get('/get' ,verifyJWT_MW,get_courses)
router.get('/getall' ,verifyJWT_MW,get_all_courses)





module.exports = router