import { GraphQLString, GraphQLInt, GraphQLObjectType, GraphQLFloat } from "graphql";
import { GraphQLDateTime } from "graphql-scalars";

const ProductDescriptionType = new GraphQLObjectType({
    name: "ProductDescription",
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat },
        created_at: { type: GraphQLDateTime }
    }
});

export default ProductDescriptionType;