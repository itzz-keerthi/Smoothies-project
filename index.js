const express=require('express');
const mongoose=require('mongoose');

const app=express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));


const dbURI='mongodb+srv://keerthi:LI9zaquHUhxOMarA@cluster0.han2cbd.mongodb.net/node-auth'
mongoose.connect(dbURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Database connected");
}).catch(err=>{
    console.error("Error connecting to DB:",err);
    process.exit(1);
})

app.set('view engine','ejs');
//routes
app.get('/',(req,res)=>res.render('home'));
app.get('/smoothies',(req,res)=>res.render('smoothies'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});