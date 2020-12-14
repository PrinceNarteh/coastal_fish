export const ADD_TO_BASKET = gql`
    mutation AddToBasket($product: ) {
        addToBasket(product: $product) {
            id
            name
            description
            price
            image
            inStock
        }
    }
`;
