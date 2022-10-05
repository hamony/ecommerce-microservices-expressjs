'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EAVPivotGroupAttributes', {
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
      is_visible: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      sort_order: {
        type: Sequelize.SMALLINT
      }
    });
    await queryInterface.addIndex('EAVPivotGroupAttributes', ['attribute_group_id', 'attribute_id'], {
      indicesType: 'UNIQUE'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EAVPivotGroupAttributes');
  }
};