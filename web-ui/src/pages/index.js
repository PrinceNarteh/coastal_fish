import { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { motion } from "framer-motion";
import Button from "../modules/global/components/Button";
import Features from "../modules/global/components/Features";
import ProductList from "../modules/global/components/ProductList";
import Footer from "../modules/global/components/Footer";

import { withApollo, cache } from "../lib/apollo/apollo";

const Home = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  useEffect(() => {
    if (cache) {
      const shoppingCart = cache.readQuery({
        query: gql`
          query ShoppingCart {
            shoppingCart {
              items {
                id
                name
                price
              }
              totalPrice
            }
          }
        `,
      });

      console.log(shoppingCart);
    }
  }, [cache]);

  if (loading) return <h2 className="page-title">Fetching Products</h2>;
  if (error) {
    console.log(error);
    return <h2 className="page-title">Oop! an error occured</h2>;
  }

  return (
    <>
      <Styled>
        <div className="content">
          <Title>
            Not Just Fish, <br />
            But{" "}
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Coastal Fish
            </motion.span>
          </Title>
          <p>Enjoy the taste of fresh fish right from the sea.</p>
          <Button>
            <Link href="/products">
              <a>Assorted Fish</a>
            </Link>
          </Button>
        </div>
      </Styled>
      <Features />
      <ProductList />
      <Footer />
    </>
  );
};

export default withApollo(Home);

/* GraphQL */
const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    products {
      id
      name
    }
  }
`;

/* Styling */
const Styled = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-image: url("/static/img/background.jpg");
  background-color: crimson;
  background-size: cover;
  display: flex;
  align-items: center;
  overflow: hidden;

  .content {
    width: 90%;
    margin: 0 auto;
  }

  p {
    font-size: 2.1rem;
  }

  button {
    font-size: 2rem;
  }

  a {
    color: #fff !important;
  }
`;

const Title = styled.h1`
  font-size: 6rem;
  line-height: 6rem;

  span {
    color: crimson;
    /* letter-spacing: 1rem; */
    /* font-size: 7rem; */
  }
`;
