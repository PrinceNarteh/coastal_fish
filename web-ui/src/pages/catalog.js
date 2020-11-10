import { useContext } from "react";
import styled from "styled-components";

// Local Import
import { withApollo } from "../modules/global/lib/apollo/apollo";
import layoutContext from "../modules/global/components/Layout";
// import media from "../modules/global/components/base/media";

// Component
const Home = () => {
  // Layout Settings
  const layout = useContext(layoutContext);
  layout.updateStateWithEffect({ title: "Catalog" });

  return (
    <div className="catalog">
      <h1>Catalog</h1>
    </div>
  );
};

export default withApollo(Home);

// Styling
const Styled = styled.div`
  width: 100%;
  height: 100%;
`;
