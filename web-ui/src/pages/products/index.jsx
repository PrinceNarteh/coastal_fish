import Product from "../../modules/products/Product";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { withApollo } from "../../lib/apollo/apollo";

export const products = [
  {
    id: 1,
    name: "Octopus",
    price: 40,
    preference: "Fried",
    productImage: "/static/img/products/octopus.jpg",
  },
  {
    id: 2,
    name: "Shrimps",
    price: 30,
    preference: "Fresh",
    productImage: "/static/img/products/shrimps.jpg",
  },
  {
    id: 3,
    name: "Crab",
    price: 20,
    preference: "Fresh",
    productImage: "/static/img/products/crabs.jpg",
  },
  {
    id: 4,
    name: "Cassava Fish",
    price: 50,
    preference: "Smoked",
    productImage: "/static/img/products/doctor-fish.jpg",
  },
  {
    id: 5,
    name: "Red Snapper",
    price: 35,
    preference: "Smoked",
    productImage: "/static/img/products/red-sapper.jpg",
  },
  {
    id: 6,
    name: "Tuna Fish",
    price: 35,
    preference: "Smoked",
    productImage: "/static/img/products/tuna.jpg",
  },
  {
    id: 7,
    name: "Salmon",
    price: 25,
    preference: "Smoked",
    productImage: "/static/img/products/salmon.jpg",
  },
  {
    id: 8,
    name: "Herrings",
    price: 25,
    preference: "Smoked",
    productImage: "/static/img/products/herrings.jpg",
  },
  {
    id: 9,
    name: "Red Fish",
    price: 30,
    preference: "Fresh",
    productImage: "/static/img/products/red-fish.jpg",
  },
];

const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
      description
      price
      inStock
    }
  }
`;

const Products = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  console.log(loading);
  console.log(error);
  console.log(data);

  return (
    <section>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <style jsx>{`
        section {
          padding: 9rem 0 5rem;
          width: 90%;
          margin: 0 auto;
        }
        .products {
          display: flex;
          flex-wrap: wrap;
          gap: 4rem;
          justify-content: center;
        }
      `}</style>
    </section>
  );
};

export default withApollo(Products);
