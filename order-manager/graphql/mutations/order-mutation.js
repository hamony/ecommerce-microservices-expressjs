import { GraphQLFloat, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import Order from "../../models/order.js";
import { OrderType } from "../types/order-type.js";
import CreateOrderLineInput from "../types/orderline-input-type.js";
import { StatusEnumType } from "../types/status-enum-type.js";
import sequelize  from "../../models/connection.js";
import OrderLine from "../../models/orderline.js";
import DispatcherEvent from "../../events/dispatcher.js";

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createOrder: {
            type: OrderType,
            args: {
                total: { type: new GraphQLNonNull(GraphQLFloat) },
                status: { type: new GraphQLNonNull(StatusEnumType)},
                customer_account_id: { type: new GraphQLNonNull(GraphQLInt)},
                orderlines: {
                    type: new GraphQLNonNull( new GraphQLList(CreateOrderLineInput)),
                    args: {
                        price: {type: new GraphQLNonNull(GraphQLFloat)},
                        quantity: { type: new GraphQLNonNull(GraphQLInt)},
                        discount: { type: new GraphQLNonNull(GraphQLFloat)},
                        unit: { type: new GraphQLNonNull(GraphQLString)},
                        subtotal: { type: new GraphQLNonNull(GraphQLFloat)},
                        product_description_id: { type: new GraphQLNonNull(GraphQLInt)}
                    }
                }
            },
            resolve: async (_, {total, status, customer_account_id, orderlines}) => {
                const t = await sequelize.transaction();
                try {
                    const order = await Order.create({
                        total: total,
                        status: status,
                        customer_account_id: customer_account_id,
                        orderlines: orderlines
                    }, {transaction: t});
                    const orderdetails = [];
                    for (const orderline of orderlines) {
                        orderline.order_id = order.id;
                        orderdetails.push(orderline);
                    }
                    await OrderLine.bulkCreate(orderdetails, {transaction: t});
                    await t.commit();
                    // Publish OrderCreated event
                    DispatcherEvent.dispatch({queue: 'OrderCreated', event: {eventName:'OrderCreated', products: orderdetails}});
                    return order;
                } catch (error) {
                    await t.rollback();
                }
            }
        }
    }
});

export default Mutation;