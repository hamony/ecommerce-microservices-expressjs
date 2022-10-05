'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EAVAttributeGroups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.SMALLINT
      },
      attribute_group_name: {
        type: Sequelize.STRING(150)
      },
      attribute_group_code: {
        type: Sequelize.STRING(150)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EAVAttributeGroups');
  }
};