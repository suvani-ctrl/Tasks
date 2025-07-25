const errorHandler = (err,req,res,next) =>{
const {constants} = require("../constants")
const statusCode = res.statusCode ? res.statusCode : 500;
switch(statusCode)
{
    case constants.VALIDATION_ERROR:
        res.json({
            title: "Validation Error",
            message: err.message,
            stackTrace: err.stack,
        });
        break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not found",
                message: err.message,
                stackTrace: err.stack,
            })
        break;
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack,
            })
        
            default:
                console.log("No error, all good !")
                break;
}

}




module.exports = errorHandler