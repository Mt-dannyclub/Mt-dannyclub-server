const Sequelize = require('sequelize')

module.exports = class Post extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            title : {
                type: Sequelize.STRING(15),
                allowNull: true,
                primaryKey: true,
                comment: "게시물제목",
            },
            content :{
                type: Sequelize.STRING(1000),
                allowNull : true,
                comment: "게시물 내용",
            },
            img : {
                type : Sequelize.STRING(200),
                allowNull:false,
                comment : "사진",
            }
        },{
            sequelize,
            timestamps : true,
            paranoid: true,
            modelName : 'Post',
            tableName  : 'posts',
            charset : 'utf8mb4',
            collate : 'utf8mb4_general.ci',
        });
    }
    static associate(db){
        
    }
}