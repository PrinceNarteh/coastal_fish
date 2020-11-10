import Product from "../../modules/products/Product";
import Search from "../../modules/products/Search";

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
    name: "Doctor Fish",
    price: 35,
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

const Products = () => {
  return (
    <section>
      <Search />

      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <style jsx>{`
        section {
          padding: 11rem 0 5rem;
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

export default Products;
