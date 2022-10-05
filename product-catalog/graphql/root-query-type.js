import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { Sequelize  } from "sequelize";
const Op = Sequelize.Op;

import ProductDescription from "../models/product-description.js";
import ProductCatalog from "../models/product-catalog.js";

import ProductDescriptionType from "./types/product-description.js";
import InputFilterProductType from "./queries/filter-product.js";
import InputSortProductType from "./queries/sort-product.js";
import ProductCatalogType from "./types/product-catalog.js";

const RootQueryType = new GraphQLObjectType({
    name: "Query",
    fields: {
        catalog: {
            type: ProductCatalogType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (_, {id}) => {
                return ProductCatalog.findOne({id});
            }
        },
        product: {
            type: ProductDescriptionType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (_, {id}) => {
                return ProductDescription.findOne({id});
            }
        },
        products: {
            type: new GraphQLList(ProductDescriptionType),
            args: {
                search: { type: GraphQLString },
                filter: { type: InputFilterProductType },
                sort: { type: InputSortProductType}
            },
            resolve: (_, {search, filter, sort}) => {
                let options = {
                    where: {}
                };
                let price = {};
                if (filter && filter.min_price) {
                    price[Op.gte] = filter.min_price;
                    options.where['price'] = price; 
                }
                if (filter && filter.max_price) {
                    price[Op.lte] = filter.max_price;
                    options.where['price'] = price;
                }
                if (search) {
                    options.where.name = {
                        [Op.like] : `%${search}%`
                    };
                }
                if (sort) {
                    options.order = [
                        [sort.sort_type, sort.sort_order]
                    ];
                }
                return ProductDescription.findAll(options);
            }
        }
    }
});

export  default RootQueryType;