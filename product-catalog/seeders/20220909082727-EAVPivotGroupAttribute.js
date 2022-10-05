'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let data = [
        { attribute_group_id: 1, attribute_id: 1, sort_order: 1 },
        { attribute_group_id: 2, attribute_id: 2, sort_order: 1 },
        { attribute_group_id: 2, attribute_id: 3, sort_order: 2 },
        { attribute_group_id: 2, attribute_id: 4, sort_order: 3 },
        { attribute_group_id: 2, attribute_id: 5, sort_order: 4 },
        { attribute_group_id: 2, attribute_id: 6, sort_order: 5 },
        { attribute_group_id: 2, attribute_id: 7, sort_order: 6 },
        { attribute_group_id: 2, attribute_id: 8, sort_order: 7 },
        { attribute_group_id: 2, attribute_id: 9, sort_order: 8 },
    ];
    await queryInterface.bulkInsert('EAVPivotGroupAttributes', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('EAVPivotGroupAttributes', null, {});
  }
};
