import { GraphQLString, GraphQLFloat, GraphQLInputObjectType } from "graphql";

const InputFilterProductType = new GraphQLInputObjectType({
    name: "InputFilterProduct",
    fields: {
        min_price: { type: GraphQLFloat },
        max_price: { type: GraphQLFloat },
        color: { type: GraphQLString }
    }
});

export default InputFilterProductType;