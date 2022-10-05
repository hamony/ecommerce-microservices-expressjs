'use strict';

import { DataTypes, Model } from "sequelize";
import sequelize  from "./connection.js";
import OrderLine from "./orderline.js";

class Order extends Model {}
Order.init({
  total: DataTypes.DOUBLE,
  status: DataTypes.ENUM('pending', 'succeeded', 'delivered'),
  customer_account_id: DataTypes.INTEGER,
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE
}, {
  sequelize,
  modelName: 'Order',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

Order.hasMany(OrderLine, {foreignKey: 'order_id'});
OrderLine.belongsTo(Order, {foreignKey: 'order_id'});

export default Order;