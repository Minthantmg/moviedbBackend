const cors = require("cors")

const allowedOrigins = ["http://localhost:3000"]

const corsOptions = {
    origin:(origin,callback)=>{
        if(allowedOrigins.includes(origin) || !origin){
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