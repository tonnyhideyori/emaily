if(process.env.NODE_ENV==='production'){
module.exports=require('./prod')
}
elese{
  module.exports=require('./dev')
}
