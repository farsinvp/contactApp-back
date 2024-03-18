const jsonServer=require('json-server')


const userServer=jsonServer.create()

const middleware=jsonServer.defaults()

const router=jsonServer.router("db.json")

const port=3000

userServer.use(middleware)
userServer.use(router)

userServer.listen(port,()=>{
    console.log("user portal server started at port no:"+port);
})