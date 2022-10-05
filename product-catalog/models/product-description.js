'use strict';
import { DataTypes, Model } from "sequelize";
import sequelize  from "./connection.js";

class ProductDescription extends Model {}
ProductDescription.init({
    name: DataTypes.STRING,
    summary: DataTypes.TEXT,
    description: DataTypes.TEXT,
    price: {
      type: DataTypes.DOUBLE,
      validate: {
        isFloat: true,
        min: 0
      }
    },
    availability: DataTypes.BOOLEAN,
    thumbnail_path: DataTypes.STRING,
    image_path: DataTypes.STRING,
    product_item_quantity: DataTypes.INTEGER,
    review_count: DataTypes.INTEGER,
    review_rating: DataTypes.DOUBLE,
    product_catalog_id: DataTypes.SMALLINT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ProductDescription',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
export default ProductDescription;