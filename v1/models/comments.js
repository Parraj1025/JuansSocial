const sequelize = require('../config/connection')
const { Model , DataTypes} = require('sequelize')

class Comments extends Model{}

Comments.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement:true,
            primaryKey: true
        },
        body:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        post_id:{
            type:DataTypes.INTEGER,
            references:{
                model: 'posts',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments'
 }
)

module.exports = Comments