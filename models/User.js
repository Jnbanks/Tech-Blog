



const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcryptjs")

class User extends Model {}

User.init({
    // add properites here, ex:
    // id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    username: {
         type: DataTypes.STRING,
         allowNull:false,
         unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[8]
        }
    }
},{
    hooks:{
        beforeCreate:async userdata=>{
            userdata.password = await bcrypt.hash(userdata.password,5)
            return userdata
        }
    },
    sequelize,
});

module.exports=User