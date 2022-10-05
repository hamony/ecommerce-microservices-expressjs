import { GraphQLInt, GraphQLObjectType, GraphQLFloat, GraphQLString, GraphQLList } from "graphql";
import { GraphQLDateTime } from "graphql-scalars";
import { StatusEnumType } from "./status-enum-type.js";

import OrderLine from "../../models/orderline.js";
import { OrderLineType } from "./orderline-type.js";



const OrderType = new GraphQLObjectType({
    name: "Order",
    fields: {
        id: { type: GraphQLInt },
        total: { type: GraphQLFloat },
        status: { type: StatusEnumType },
        customer_account_id: { type: GraphQLInt },
        created_at: { type: GraphQLDateTime },
        updated_at: { type: GraphQLDateTime },
        orderlines: {
            type: new GraphQLList(OrderLineType),
            resolve: (parent) => {
                return OrderLine.findAll({where: {order_id: parent.id}});
            }
        }
    }
});

export {
    OrderType
};