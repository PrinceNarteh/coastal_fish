import Link from "next/link";
import styled, { css } from "styled-components";
import Title from "./Title";
import Product from "../../products/Product";
import { products } from "../../../pages/products/index";

const ProductList = () => {
  return (
    <div>
      <Title>Products</Title>
      <StyledProductList>
        {products.slice(0, 6).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </StyledProductList>
      <Link href="/products">
        <a>View more...</a>
      </Link>
    </div>
  );
};

export default ProductList;

const StyledProductList = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;
