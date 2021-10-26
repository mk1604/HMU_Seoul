const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            user_id: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING(60),
                allowNull: false,
            },
/*            gender : {
                type : Sequelize.BOOLEAN,
                allowNull : false,
            },*/
            age : {
                type : Sequelize.STRING(5),
                allowNull : false
            }

        }, {
            sequelize,
            timestamps: true,       //createdTime, updatedTime
            paranoid: true,         //deletedTime
            underscored: false,
            modelName: 'User',
            tableName: 'user',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {}
};
