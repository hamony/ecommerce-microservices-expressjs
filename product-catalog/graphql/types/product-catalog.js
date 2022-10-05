import { GraphQLString, GraphQLInt, GraphQLObjectType, GraphQLList } from "graphql";
import { GraphQLDateTime } from "graphql-scalars";
import ProductDescriptionType from "./product-description.js";
import ProductDescription from "../../models/product-description.js";

const ProductCatalogType = new GraphQLObjectType({
    name: "ProductCatalog",
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        created_at: { type: GraphQLDateTime },
        products: { 
            type: new GraphQLList(ProductDescriptionType),
            resolve: (parent) => {
                return ProductDescription.findAll({
                    where: {
                        product_catalog_id: parent.id
                    }
                });
            }
        }
    }
});

export default ProductCatalogType;