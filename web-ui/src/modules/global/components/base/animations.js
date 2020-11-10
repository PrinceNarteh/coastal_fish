import { keyframes } from "styled-components";

export const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-100px)
    }
    100% {
        opacity: 1;
        transform: translateY(0px)
    }
`;

export const fadeOut = keyframes`
    0% {
        opacity: 1;
        transform: translateY(0px)
    }
    100% {
        opacity: 0;
        transform: translateY(-100px)
    }
`;

export const loaderAmin = keyframes`
   0% {
       transform: translateX(-100%);
    }
    50% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-100%);
    }
`;

export const woble = keyframes`
   0% {
       transform: translateX(0%);
    }
    25% {
        transform: translateX(10%);
    }
    25% {
        transform: translateX(-10%);
    }
    50% {
        transform: translateX(5%);
    }
    100% {
        transform: translateX(0%);
    }
`;
