require('dotenv').config()
const connectDB  = require('./database.js');
const app = require('./server.js')




connectDB()
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
})
