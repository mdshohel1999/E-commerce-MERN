
const express = require('express');
const morgan = require('morgan')
const app = express();
const PORT = 3000;


//? middleware
//* Middleware is function

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const isLoggedIn = (req, res, next)=>{
    // console.log('IsLaggedIn middleware')
    
    const logIn = true;
    if(logIn){
        req.body.id = 101
        next()
    }
    else{
        return res.status(401).json({message : 'please login'});
    }
}

//* get method
app.get('/test', (req, res)=>{
    res.status(200).send({
        message: 'api is working fine',
    });
})

app.get('/api/user', isLoggedIn,(req, res)=> {
    console.log(req.body.id);
    res.status(200). send({
        message: "User profile is return"
    });
});

// app.post('/test', (req, res)=>{
//     res.status(200).send({
//         message: 'This is post api'
//     });
// });

// app.put('/test', (req, res)=>{
//     res.status(200).send({
//         message: 'This is put request'
//     });
// });

// app.delete('/test', (req, res)=>{
//     res.status(300). send({
//         message: "this is delete reques"
//     });
// });




app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});