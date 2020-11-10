import { FunctionComponent, useState, createContext, useEffect } from "react";
import styled from "styled-components";

// Local Import
// import media from "./base/media";
import Page from "./base/Page";
import { flaten } from "../../../lib/flatenObject";

// Default Values & Context
const defaultState = {
  title: "",
};
const layoutContext = createContext({
  state: defaultState,
  updateState: null,
  updateStateWithEffect: null,
});

// Provider
export const LayoutProvider = ({ children }) => {
  const [state, setState] = useState(defaultState);

  // Update Context State
  const updateState = (update) => setState((prevState) => flaten(prevState, update));

  // Update Context State With Effect
  const updateStateWithEffect = (update) => {
    useEffect(() => {
      updateState(update);
      return;
    }, []);
  };

  return (
    <layoutContext.Provider value={{ state, updateState, updateStateWithEffect }}>
      <Page title={`${state.title}${state.title && " | "}App Name`}>
        <Styled>
          <div className={`app-body`}>{children}</div>
        </Styled>
      </Page>
    </layoutContext.Provider>
  );
};

export default layoutContext;

const Styled = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
