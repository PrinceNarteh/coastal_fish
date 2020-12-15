import Product from "../../modules/products/Product";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { withApollo } from "../../lib/apollo/apollo";

export const products = [
  {
    id: 1,
    name: "Octopus",
    description:
      'Octopus an important protein source in coastal communities around the world and is considered a delicacy by many cultures. It is an excellent source of omega-3 fatty acids, "good fats" linked to a range of heart-healthy benefits. Omega-3s can lower your blood pressure and slow the buildup of plaque in your arteries, reducing stress on the heart.',
    price: 40,
    preference: "Fried",
    productImage: "/static/img/products/octopus.jpg",
  },
  {
    id: 2,
    name: "Shrimps",
    description:
      "Shrimp is one of the most commonly consumed types of shellfish. It is quite nutritious and provides high amounts of certain nutrients, such as iodine, that aren’t abundant in many other foods. It is quite low in calories, providing only 84 calories in a 3-ounce (85-gram) serving, and does not contain any carbs. Approximately 90% of the calories in shrimp come from protein, and the rest come from fat.",
    price: 30,
    preference: "Fresh",
    productImage: "/static/img/products/shrimps.jpg",
  },
  {
    id: 3,
    name: "Crab",
    price: 20,
    description:
      "Crab is more than a popular item on a seafood menu; it also offers us a number of impressive health benefits, such as its ability to increase cognition, protect the heart, reduce inflammation, strengthen bones, boost the immune system, stimulate circulation, and detoxify the body.",
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
    description:
      "Red snapper is a low-calorie, lean source of protein that is rich in selenium, vitamin A, potassium and omega-3 fatty acids. A diet that regularly incorporates these nutrients may significantly benefit your health by preventing serious medical conditions. Despite the potential health benefits, red snapper may contain mercury levels that make it unsafe for pregnant women and young children to eat more than a few times a month. However, if it's safe for you to eat in moderation, it can provide nutrients.",
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
