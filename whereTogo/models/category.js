const Sequelize = require('sequelize');

module.exports = class Category extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            category_name: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: false,       //createdTime, updatedTime
            paranoid: false,         //deletedTime
            underscored: false,
            modelName: 'Category',
            tableName: 'category',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
    }
};
