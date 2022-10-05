'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let data = [
        { attribute_group_name: 'Default', attribute_group_code: "default" },
        { attribute_group_name: 'Product Details', attribute_group_code: "product_details" }
    ];
    await queryInterface.bulkInsert('EAVAttributeGroups', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('EAVAttributeGroups', null, {});
  }
};
