const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');

dotenv.config();
const pageRouter= require('./routes');
const app = express();
app.set('port', process.env.PORT || 8080);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
}));
app.use('/',pageRouter);
app.use((req,res,next)=>{
    const error = new Error(`${req.method} ${req.url} no router`);
    error.status =404;
    next(error);
});
app.use(err,req,res,next =>{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status||500);
    next(error);
});


app.listen(app.get('port'), ()=>{
    console.log('waiting',app.get('port'),'port...');
});