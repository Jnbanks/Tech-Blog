const sequelize = require("../config/connection")
const {User,Blog,Comment} = require("../models")

const users = [
    {
        username:"joe",
        password:"password"
    },
    {
        username:"otherjoe",
        password:"password1"
    },
    {
        username:"therealjoe",
        password:"Password1"
    }
]

const blogs = [
    {
        title:"Oi",
        body:"Hola!",
        UserId:1
    },
    {
        title:"Ala Elmo",
        body:"you thought I was going to write about the alamo",
        UserId:1
    },
    {
        title:"funk",
        body:"going to funky town",
        UserId:2
    }
]

const comments = [
    {
        body:"I like this!",
        BlogId:1
    },
    {
        body:"I don't think this is accurate", 
        BlogId:2
    },
    {
        body:"OH YEAH",
        BlogId:2
    }
]

const feedMe = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        await Comment.bulkCreate(comments);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

feedMe()