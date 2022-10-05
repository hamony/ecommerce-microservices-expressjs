'use strict';

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
     let data = [
          { attribute_name: 'Color', attribute_code: 'color', description: "Color or colour is the visual perceptual property deriving from the spectrum of light interacting with the photoreceptor cells of the eyes.", data_type: "varchar" },
          { attribute_name: 'Width', attribute_code: 'width', description: "measurement", data_type: 'int', unit: 'mm'},
          { attribute_name: 'Height', attribute_code: 'height', description: "measurement", data_type: 'int', unit: 'mm'},
          { attribute_name: 'Depth', attribute_code: 'depth', description: "measurement", data_type: 'int', unit: 'mm'},
          { attribute_name: 'Weight', attribute_code: 'weight', description: "measurement", data_type: 'int', unit: 'gm'},
          { attribute_name: 'Quality checking', attribute_code: 'quality_checking', description: "measurement", data_type: 'enum'},
          { attribute_name: 'Freshness Duration', attribute_code: 'freshness_duration', description: "measurement", data_type: 'int', unit: 'days'},
          { attribute_name: 'When packeting', attribute_code: 'when_packeting', description: "measurement", data_type: 'varchar'},
          { attribute_name: 'Each Box contains', attribute_code: 'each_box_contains', description: "measurement", data_type: 'int', unit: 'pcs'},
      ];
      await queryInterface.bulkInsert('EAVProductAttributes', data, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('EAVProductAttributes', null, {});
  }
};
