
const Portfolio = require('../models/Portfolio')




const renderIndex = async(req,res)=>{
    const portfolios = await Portfolio.find().lean()
    res.render('index',{portfolios})
}

module.exports ={
    renderIndex
}