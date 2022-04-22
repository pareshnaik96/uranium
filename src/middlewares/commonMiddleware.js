
const mid= function ( req, res, next) {
  if(req.headers.isfreeappuser ){
    next()
    
 }else{
      res.send("The app free user is missing")
    }
}

module.exports.mid= mid

