const Sequelize = require('sequelize');

module.exports = class Result extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            feature_one : {
                type: Sequelize.STRING,
                allowNull: true,
            },
            feature_two : {
                type: Sequelize.STRING,
                allowNull: true,
            },
            feature_three : {
                type: Sequelize.STRING,
                allowNull: true,
            },
            feature_four : {
                type: Sequelize.STRING,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,       //createdTime, updatedTime
            paranoid: false,         //deletedTime
            underscored: false,
            modelName: 'Result',
            tableName: 'result',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
    }
};
