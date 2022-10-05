'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('Orders', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT
        },
        total: {
          type: Sequelize.DOUBLE
        },
        status: {
          type: Sequelize.ENUM('pending', 'succeeded','delivered')
        },
        customer_account_id: {
          type: Sequelize.INTEGER
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
      await queryInterface.dropTable('Orders'); 
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
};