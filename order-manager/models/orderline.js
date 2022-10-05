'use strict';
import { DataTypes, Model } from "sequelize";
import sequelize  from "./connection.js";

class OrderLine extends Model {}
OrderLine.init({
    price: {
      type: DataTypes.DOUBLE,
      validate: {
        isFloat: true,
        min: 0
      }
    },
    quantity: DataTypes.SMALLINT,
    discount: DataTypes.DOUBLE,
    unit: DataTypes.STRING,
    subtotal: DataTypes.DOUBLE,
    order_id: DataTypes.BIGINT,
    product_description_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'OrderLine',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
export default OrderLine;