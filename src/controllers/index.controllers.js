
const Portfolio = require('../models/portfolio')




const renderIndex = async(req,res)=>{
    const portfolios = await Portfolio.find().lean()
    res.render('index',{portfolios})
}

module.exports ={
    renderIndex
}
