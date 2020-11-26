import styled from "styled-components";
import AdminLayout from "../../modules/global/components/AdminLayout";
import AdminProduct from "../../modules/products/AdminProduct";
import { products } from "../products/index";

const AllProducts = () => {
  return (
    <AdminLayout>
      <h1>All Products</h1>
      <StyledAllProduct>
        {products.map((product) => (
          <AdminProduct key={product.id} product={product} />
        ))}
      </StyledAllProduct>
    </AdminLayout>
  );
};

const StyledAllProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
`;

export default AllProducts;
