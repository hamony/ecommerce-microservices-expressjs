import { GraphQLFloat, GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql";

const CreateOrderLineInput = new GraphQLInputObjectType({
    name: 'CreateOrderLineInput',
    description: 'Input payload for creating order',
    fields: () => ({
        price: {type: new GraphQLNonNull(GraphQLFloat)},
        quantity: { type: new GraphQLNonNull(GraphQLInt)},
        discount: { type: new GraphQLNonNull(GraphQLFloat)},
        unit: { type: new GraphQLNonNull(GraphQLString)},
        subtotal: { type: new GraphQLNonNull(GraphQLFloat)},
        product_description_id: { type: new GraphQLNonNull(GraphQLInt)}
    })
});

export default CreateOrderLineInput;