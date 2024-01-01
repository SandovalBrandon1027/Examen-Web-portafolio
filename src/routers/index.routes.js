// const {Router} = require('express')
// const router = Router()

// const {renderIndex} = require('../controllers/index.controllers.js')


// router.get('/',renderIndex)





// module.exports = router



const {Router} = require('express')

const router = Router()

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/login',(req,res)=>{
    res.render('login')
})

module.exports = router