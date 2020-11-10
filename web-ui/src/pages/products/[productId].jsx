import Link from "next/link";
import Button from "../../modules/global/components/Button";
import styled from "styled-components";
import Product from "../../modules/products/Product";
import { products } from "./index";

const ProductDetail = (props) => {
  return (
    <>
      <ProductDetailStyled>
        <div className="product">
          <div className="product-image">
            <img src="/static/img/products/cassava-fish.jpeg" />
          </div>
          <div className="product-info">
            <h1>Cassava Fish</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quisquam
              repudiandae culpa impedit ratione aliquam.
            </p>
            <h3>GH¢ 50</h3>
            <p>
              Preference:
              <select name="" id="">
                <option value="fresh">Fresh</option>
                <option value="smoked">Smoked</option>
                <option value="fried">Fried</option>
              </select>
            </p>
            <p>
              Quantity:
              <input type="number" min="1" defaultValue="1" />
            </p>
            <Button>Add to Basket</Button>
          </div>
        </div>
      </ProductDetailStyled>
      <RelatedProductsStyled>
        <div className="header">
          <Title>Related Products</Title>
          <Link href="/products">
            <a>View more</a>
          </Link>
        </div>
        <div className="related-products">
          {products.slice(1, 5).map((product) => (
            <Product id={product.id} product={product} />
          ))}
        </div>
      </RelatedProductsStyled>
    </>
  );
};

const ProductDetailStyled = styled.div`
  padding-top: 11rem;
  width: 90%;
  margin: 0 auto;

  & .product {
    min-height: 60vh;
    width: 60%;
    margin: 0 auto;
    display: flex;
    border-radius: 0.5rem;

    .product-image {
      width: 100%;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .product-info {
      padding: 2rem 2rem 2rem 5rem;

      h1 {
        font-size: 3rem;
        line-height: 3.5rem;
        margin-bottom: 1rem;
      }

      h3 {
        font-size: 2.2rem;
        color: crimson;
      }
    }
  }

  input,
  select {
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    width: 7rem;
    outline: none;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    margin-left: 2rem;
  }

  select {
    background-color: transparent;
    width: 10rem;
    color: #555;
    padding-right: 1rem;
  }

  p {
    margin: 2rem 0;
    font-size: 1.8rem;
  }
`;

const RelatedProductsStyled = styled.div`
  width: 90%;
  margin: 2rem auto;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;
    padding: 0 6rem;
  }

  .related-products {
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    justify-content: center;
  }

  .product {
    width: 23rem;
    min-width: 23rem;
    height: 22rem;
    min-height: 22rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
`;

export default ProductDetail;
