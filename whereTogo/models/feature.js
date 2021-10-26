const Sequelize = require('sequelize');

module.exports = class Feature extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            inside: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            loud: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            active: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            spend: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            culture: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            picture: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },

        }, {
            sequelize,
            timestamps: false,       //createdTime, updatedTime
            paranoid: false,         //deletedTime
            underscored: false,
            modelName: 'Feature',
            tableName: 'feature',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.Feature.belongsTo(db.Keyword);
    }
};
