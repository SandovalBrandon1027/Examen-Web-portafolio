
// const Portfolio = require('../models/portfolio')




// const renderIndex = async(req,res)=>{
//     const portfolios = await Portfolio.find().lean()
//     res.render('index',{portfolios})
// }

// module.exports ={
//     renderIndex
// }


//PRIMERA FUNCION PARA RENDERIZAR EL INDEX
const renderIndex = (req,res)=>{
    res.render('index')
}

//PRIMRA FUNCION PARA RENDERIZAR EL LOGIN
const renderAbout = (req,res)=>{
    res.render('login')
}



module.exports ={
    renderIndex, 
    renderAbout
}