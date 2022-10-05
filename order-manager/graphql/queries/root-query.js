import { GraphQLInt, GraphQLObjectType } from "graphql";
import { Sequelize  } from "sequelize";
const Op = Sequelize.Op;

import Order from "../../models/order.js";

import { OrderType } from "../types/order-type.js";

const RootQueryType = new GraphQLObjectType({
    name: "Query",
    fields: {
        order: {
            type: OrderType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (_, {id}) => {
                return Order.findOne({id});
            }
        }
    }
});

export  default RootQueryType;