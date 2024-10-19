
const asyncHandler =(requestHandler)=> {
    (req, res, next)=>{
        Promise.resolve(requestHandler(req, res,next)).reject((err)=> next(err))
    }
}

export{asyncHandler}






// const asyncHandler = ()=> {}
// const asyncHandler = (func)=> {()=>{}}
// const asyncHandler = (func)=> async()=>{}

    // what is higher order function
    // which function treat function as a veriable or as a parameter

    // const asyncHandler=(fn)=>async(req, res, next)=>{
    //     try {
    //         await fn(req, res, next)
    //     } catch (error) {
    //        res.status(err.code || 500).json({
    //         success: false,
    //         message: err.message
    //        }) 
    //     }
    // }
