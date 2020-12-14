import { useState } from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { withApollo } from "../../lib/apollo/apollo";
import AdminLayout from "../../modules/global/components/AdminLayout";
import Input from "../../modules/global/components/Input";
import Label from "../../modules/global/components/Label";
import TextArea from "../../modules/global/components/TextArea";

const ADD_PRODUCT = gql`
  mutation addProduct(
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload!
  ) {
    addProduct(name: $name, description: $description, price: $price, image: $image) {
      id
      name
    }
  }
`;

const AddProduct = () => {
  const [state, setState] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });
  const [addProduct] = useMutation(ADD_PRODUCT, {
    onCompleted: (data) => console.log(data),
    onError: (error) => console.log(error),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "price") {
      const newValue = parseInt(value);
      setState((prevState) => ({ ...prevState, [name]: newValue }));
      return;
    }
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setState((prevState) => ({ ...prevState, image: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ variables: { ...state } });
  };

  console.log(state);

  return (
    <AdminLayout>
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit}>
        <FormWrapper>
          <div className="content">
            <Label>Product Name:</Label>
            <Input name="name" onChange={handleChange} />
            <Label>Price:</Label>
            <StyledPrice>
              <div className="prepend">GH</div>
              <input
                name="price"
                type="number"
                dir="rtl"
                placeholder="0.00"
                onChange={(e) => handleChange(e)}
              />
            </StyledPrice>
            <Label>Product Description:</Label>
            <TextArea name="description" onChange={handleChange} />
          </div>
          <div className="image">
            <input name="image" type="file" onChange={(e) => handleFileSelect(e)} />
          </div>
        </FormWrapper>
        <button type="submit">Save</button>
      </form>
    </AdminLayout>
  );
};

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 1rem;
  width: 70%;
  margin: 0 auto;
  overflow: hidden;

  .content {
    width: 100%;
    background-color: #fff;
    padding: 2rem;
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const StyledPrice = styled.div`
  display: flex;
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 2rem;
  height: 3.5rem;
  align-items: center;

  .prepend {
    padding: 1rem;
    background-color: #eee;
  }

  input {
    width: 100%;
    padding: 0 1rem;
    border: none;
    outline: none;
    font-size: 1.8rem;
  }
`;

export default withApollo(AddProduct);
