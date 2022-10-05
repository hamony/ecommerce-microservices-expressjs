import { GraphQLInt, GraphQLObjectType, GraphQLFloat, GraphQLString } from "graphql";


const OrderLineType = new GraphQLObjectType({
    name: "OrderLine",
    fields: {
        id: { type: GraphQLInt },
        price: { type: GraphQLFloat },
        quantity: { type: GraphQLInt },
        discount: { type: GraphQLFloat },
        unit: { type: GraphQLString },
        subtotal: { type: GraphQLFloat }
    }
});

export {
    OrderLineType
};