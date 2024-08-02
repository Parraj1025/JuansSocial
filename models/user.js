const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')
const bcrypt = require('bcrypt')

class User extends Model{
   static async login(password,hashedpass){
        return bcrypt.compare(password, hashedpass)
    }
}

const securePassword = async (userData) => {
    userData.password = await bcrypt.hash(userData.password,10)
    return userData;
}

User.init(
    
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement:true,
            primaryKey:true
        },
        username: {
            type: DataTypes.STRING,
            allowNull:false
        },
        email: {
            type: DataTypes.STRING,
            allowNull:false,
            unique:true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    }, 
    {
        hooks:{
            beforeCreate: securePassword,
            beforeUpdate: securePassword

        },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
    })

    module.exports = User 