'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('OrderLines', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT
        },
        price: {
          type: Sequelize.DOUBLE
        },
        quantity: {
          type: Sequelize.SMALLINT
        },
        discount: {
          type: Sequelize.DOUBLE
        },
        unit: {
          type: Sequelize.STRING
        },
        subtotal: {
          type: Sequelize.DOUBLE
        },
        product_description_id: {
          type: Sequelize.INTEGER
        },
        order_id: {
          type: Sequelize.BIGINT,
          references: {
            model: {
              tableName: 'Orders'
            },
            key: 'id'
          }
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
      await queryInterface.dropTable('OrderLines');
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
};