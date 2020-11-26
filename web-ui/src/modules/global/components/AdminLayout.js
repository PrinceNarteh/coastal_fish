import styled from "styled-components";
import SideBar from "./SideBar";

const AdminLayout = ({ children }) => {
  return (
    <StyledDashboard>
      <div className="side">
        <SideBar />
      </div>
      <Main>{children}</Main>
    </StyledDashboard>
  );
};

const StyledDashboard = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(20rem, 25rem) 1fr;
`;

const Main = styled.div`
  padding: 9rem 5rem 5rem;
  background-color: #f9f9f9;
`;

export default AdminLayout;
