import { gql } from "apollo-boost";

export const TOOGLE_SIDEBAR = gql`
  mutation ToogleSidebar($view: Int!) {
    toggleSidebar(view: $view) @client {
      isActive
    }
  }
`;

export const GET_SIDEBAR = gql`
  query GetSidebar {
    sidebar @client {
      view
    }
  }
`;
