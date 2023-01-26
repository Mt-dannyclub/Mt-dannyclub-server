const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
  static init(sequelize){
    return super.init({
        UserID:{
          primaryKey : true,
          type : Sequelize.STRING(12),
          allowNull : true,
          unique : true
        },
        PWD:{
          type : Sequelize.STRING(20),
          allowNull: true
        },
        School_Num:{
          type : Sequelize.STRING(4),
          allowNull : true,
          unique : true
        },
        name:{
          type : Sequelize.STRING(10),
          allowNull : true,
          unique : false
        }
    }, {
      sequelize,
      timestamps : true,
      modelName : 'User',
      tableName : 'users',
      paranoid: true,
      charset: 'utf8',
      collate : 'utf8_general_ci',
    });
  }
  static associate(db){

  };
}
