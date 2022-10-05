'use strict';
const faker = require('@faker-js/faker');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let varchar_data = [
    // Default Group
    {entity_id: 1, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Black'},
    {entity_id: 2, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Black Leather'},
    {entity_id: 3, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Black with red'},
    {entity_id: 4, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Gold'},
    {entity_id: 5, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Spacegrey'},
    {entity_id: 6, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Black'},
    {entity_id: 7, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Black'},
    {entity_id: 8, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Black with red'},
    {entity_id: 9, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Gold'},
    {entity_id: 10, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Spacegrey'},
    {entity_id: 11, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Black'},
    {entity_id: 12, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Black Leather'},
    {entity_id: 13, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Black'},
    {entity_id: 14, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Gold'},
    {entity_id: 15, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Spacegrey'},
    {entity_id: 16, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Black'},
    {entity_id: 17, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Black Leather'},
    {entity_id: 18, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Black with red'},
    {entity_id: 19, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Gold'},
    {entity_id: 20, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Spacegrey'},
    {entity_id: 21, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Black'},
    {entity_id: 22, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Black'},
    {entity_id: 23, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Black with red'},
    {entity_id: 24, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Gold'},
    {entity_id: 25, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Spacegrey'},
    {entity_id: 26, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Black'},
    {entity_id: 27, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Black Leather'},
    {entity_id: 28, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Black with red'},
    {entity_id: 29, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Gold'},
    {entity_id: 30, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Spacegrey'},
    {entity_id: 31, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Gold'},
    {entity_id: 32, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Black Leather'},
    {entity_id: 33, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Black with red'},
    {entity_id: 34, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Gold'},
    {entity_id: 35, attribute_id: 1, attribute_group_id: 1, attribute_value: 'Gold'}
   ];
   let int_data = [];
   // Product Details Group
   for (let i = 1; i < 36; i++) {
      for (let j = 2; j < 10; j++) {
        let row = {};
        switch (j) {
          case 8:
            row = {entity_id: i, attribute_id: j, attribute_group_id: 2, attribute_value: faker.faker.vehicle.vehicle()};
            varchar_data.push(row);
            break;
          default:
            row = {entity_id: i, attribute_id: j, attribute_group_id: 2, attribute_value: faker.faker.mersenne.rand(1000, 1)};
            int_data.push(row);
            break;
        }
      }
   }
    await queryInterface.bulkInsert('EAVProductValuesVarchar', varchar_data, {});
    await queryInterface.bulkInsert('EAVProductValuesInt', int_data, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('EAVProductValuesVarchar', null, {});
     await queryInterface.bulkDelete('EAVProductValuesInt', null, {});
     await queryInterface.bulkDelete('EAVProductValuesEnum', null, {});
  }
};
