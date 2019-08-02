'use strict';
module.exports = (sequelize, DataTypes) => {
    var Task = sequelize.define('Task', {
        title: DataTypes.STRING
    });

    Task.associate = (models) => {
        models.Task.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Task;
};