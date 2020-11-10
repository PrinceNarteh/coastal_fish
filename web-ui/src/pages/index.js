import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { withApollo } from "../lib/apollo/apollo";
import media from "../modules/global/components/base/media";
import Layout from "../modules/global/components/Layout";

const Home = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <h2 className="page-title">Fetching Users</h2>;
  if (error) return <h2 className="page-title">Oop! an error occured</h2>;
  return (
    <Styled>
      {data.users.map((user, key) => (
        <div key={key}>
          {user.id} : {user.name}
        </div>
      ))}
    </Styled>
  );
};

export default withApollo(Home);

/* GraphQL */
const GET_USERS = gql`
  {
    users {
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
`;
