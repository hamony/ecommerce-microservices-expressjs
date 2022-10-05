'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('ProductCatalogs', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.SMALLINT
        },
        name: {
          type: Sequelize.STRING(150)
        },
        summary: {
          type: Sequelize.TEXT
        },
        description: {
          type: Sequelize.TEXT
        },
        image_path: {
          type: Sequelize.STRING
        },
        created_at: {
          type: Sequelize.DATE,
          defaultValue: new Date()
        },
        updated_at: {
          type: Sequelize.DATE,
          defaultValue: new Date()
        }
      });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable('ProductCatalogs'); 
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
};