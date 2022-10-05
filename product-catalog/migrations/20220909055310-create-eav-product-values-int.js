'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EAVProductValuesInt', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      entity_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'ProductDescriptions'
          },
          key: 'id'
        }
      },
      attribute_group_id: {
        type: Sequelize.SMALLINT,
        references: {
          model: {
            tableName: 'EAVAttributeGroups'
          },
          key: 'id'
        }
      },
      attribute_id: {
        type: Sequelize.SMALLINT,
        references: {
          model: {
            tableName: 'EAVProductAttributes'
          },
          key: 'id'
        }
      },
      attribute_value: {
        type: Sequelize.INTEGER
      }
    });
    await queryInterface.addIndex('EAVProductValuesInt', ['attribute_group_id','entity_id', 'attribute_id'], {
      indicesType: 'UNIQUE',
      name: 'unique_attribute_group_id_entity_id_attribute_id_int'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EAVProductValuesInt');
  }
};