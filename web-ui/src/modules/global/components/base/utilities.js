import { css } from "styled-components";

import { loaderAmin, woble } from "./animations";

/* Utilities */

export default css`
  .ghost-scrollbarX {
    &::-webkit-scrollbar {
      height: 20rem;
    }
    &::-webkit-scrollbar-thumb {
      width: 20rem;
    }
  }

  .is-invalid {
    animation: ${woble} 0.5s ease-out both;
    border: 2px solid rgba(255, 0, 0, 0.5) !important;
  }

  .has-error {
    color: rgba(255, 0, 0, 0.5);
    font-size: 1.4rem;
    margin-bottom: 0.3rem;
  }

  .loader {
    min-width: 10rem;
    min-height: 1rem;
    position: relative;
    background-color: rgba(0, 0, 0, 0.2) !important;
    display: inline-block;
    overflow: hidden;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 100px;
      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.9)
      );
    }

    &::before {
      animation: ${loaderAmin} 2s ease-in-out both infinite;
    }
  }
`;
