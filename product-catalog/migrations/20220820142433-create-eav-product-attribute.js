'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EAVProductAttributes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.SMALLINT
      },
      attribute_name: {
        type: Sequelize.STRING(150)
      },
      attribute_code: {
        type: Sequelize.STRING(150)
      },
      description: {
        type: Sequelize.TEXT('tiny')
      },
      data_type: {
        type: Sequelize.STRING(10)
      },
      unit: {
        type: Sequelize.STRING(20),
        allowNull: true
      }
    });
    await queryInterface.addIndex('EAVProductAttributes', ['attribute_code']);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EAVProductAttributes');
  }
};