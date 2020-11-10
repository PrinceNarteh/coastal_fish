import { css } from "styled-components";

import media from "./media";

/* Typography */

export default css`
  body {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    /* line-height: 1.21; */
    letter-spacing: 0.16px;
    text-align: left;
    color: var(--color-white-dim);
  }

  a,
  a[href] {
    text-decoration: none;
    color: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
  }

  .small-text {
    font-size: 1.4rem;
    line-height: 1.21;
    letter-spacing: 0.14px;
  }

  .title {
    font-family: "Roboto", sans-serif;
    font-size: 7rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.21;
    letter-spacing: 0.7px;
    text-align: left;
    color: var(--color-secondary);
  }

  .page-title {
    font-family: "Roboto", sans-serif;
    font-size: 2.8rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.21;
    letter-spacing: normal;
    text-align: left;
    text-transform: capitalize;
    color: var(--color-primary);

    ${media.phone`
      font-size: 2rem;
      font-weight: 500;
      line-height: 1.2;
    `}
  }

  .heading-1 {
    font-family: "Roboto", sans-serif;
    font-size: 2rem;
    font-weight: 600;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: 0.6px;
    text-align: left;
    color: var(--color-primary);
  }

  .heading-2 {
    font-family: "Roboto", sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: 0.18px;
    text-align: left;
    color: var(--color-primary);
    margin-bottom: 3rem;
  }

  .link {
    font-family: Roboto;
    font-size: 1.6rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: 0.16px;
    text-align: left;
    color: var(--color-primary);
    position: relative;
    margin-bottom: 0.6rem;
    cursor: pointer;

    &:hover,
    &.is-active {
      color: var(--color-tertiary);
    }

    &.is-active::after {
      content: "";
      position: absolute;
      bottom: -0.6rem;
      left: 0;
      width: 100%;
      height: 0.2rem;
      background-color: var(--color-tertiary);
    }

    &:not(:last-child) {
      margin-right: 3rem;
    }
  }
`;
