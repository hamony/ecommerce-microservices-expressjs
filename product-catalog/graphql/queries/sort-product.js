import { GraphQLInputObjectType, GraphQLEnumType } from "graphql";

const SortNameType = new GraphQLEnumType({
    name: "SortNameType",
    values: {
        PRICE: { value: "price"},
        NAME: { value: "name"},
        REVIEW_RATING: { value: "review_rating"},
    }
});

const SortOrderType = new GraphQLEnumType({
    name: "SortOrderType",
    values: {
        DESC: { value: "desc"},
        ASC: { value: "asc"}
    }
});

const InputSortProductType = new GraphQLInputObjectType({
    name: "InputSortProduct",
    fields: {
        sort_type: { type: SortNameType, defaultValue: "name" },
        sort_order: { type: SortOrderType, defaultValue: "asc" }
    }
});

export default InputSortProductType;