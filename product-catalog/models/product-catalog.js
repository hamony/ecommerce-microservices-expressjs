'use strict';

import { DataTypes, Model } from "sequelize";
import sequelize  from "./connection.js";
import ProductDescription from "./product-description.js";

class ProductCatalog extends Model {}
ProductCatalog.init({
  name: DataTypes.STRING,
  summary: DataTypes.TEXT,
  description: DataTypes.TEXT,
  image_path: DataTypes.STRING,
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE
}, {
  sequelize,
  modelName: 'ProductCatalog',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

ProductCatalog.hasMany(ProductDescription, {foreignKey: 'product_catalog_id'});
ProductDescription.belongsTo(ProductCatalog, {foreignKey: 'product_catalog_id'});

export default ProductCatalog;