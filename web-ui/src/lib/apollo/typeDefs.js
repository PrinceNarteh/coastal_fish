import gql from "graphql-tag";

const typeDefs = gql`
    extends type Query {
        cart: [Product]!
    }

    extends type Mutation {
        addToBasket(product: Product!): [Product]
    }
`;

export default typeDefs;
