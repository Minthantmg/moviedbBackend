const cors = require("cors")

const allowedOrigins = ["http://localhost:3000","https://moviedb-dashboard.vercel.app"]

const corsOptions = {
    //origin=incoming req
    origin:(origin,callback)=>{
        if (!origin || allowedOrigins.includes(origin)){
            callback(null,true)
        }else{
            callback(new Error("Origin not allowed by cors"))
        }
    },
    credentials: true,
    optionSuccessStatue : 200,
};

const corsMiddleware = cors(corsOptions)

module.exports = corsMiddleware;