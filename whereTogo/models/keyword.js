const Sequelize = require('sequelize');

module.exports = class Keyword extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            keyword_name : {
                type: Sequelize.STRING,
                allowNull: false,
            },
            category_id: {
                type:Sequelize.INTEGER,
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: false,       //createdTime, updatedTime
            paranoid: false,         //deletedTime
            underscored: false,
            modelName: 'Keyword',
            tableName: 'keyword',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.Keyword.hasMany(db.Feature);
    }
};
