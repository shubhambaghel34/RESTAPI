const express= require ('express');
const app=express();
const mongoose= require('mongoose');
const PORT=3000
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoute'

mongoose.Promise=global.Promise;

//mongodb connection code
mongoose.connect('mongodb://localhost/CRMdb',{
    useNewUrlParser:true
})


//body-parser setup
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
routes(app);

app.get('/',(req,res)=>{
res.send({msg:'Hello from server'});
})


app.listen(PORT,()=>{
console.log(`server is running on ${PORT} `)
})
