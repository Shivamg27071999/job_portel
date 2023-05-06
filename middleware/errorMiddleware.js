const errorMiddleware = (err, req, res, next)=>{
    res.status(500).send({
        message:'something is wrong',
        success:false,
        err
    })
}

export default errorMiddleware