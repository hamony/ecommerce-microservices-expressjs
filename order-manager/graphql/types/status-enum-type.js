import { GraphQLEnumType } from "graphql";

const StatusEnumType = new GraphQLEnumType({
    name: "status",
    values: {
        PENDING: {value: 'pending'},
        SUCCEEDED: {value: 'succeeded'},
        DELIVERED: {value: 'delivered'},
    }
});

export {
    StatusEnumType 
};