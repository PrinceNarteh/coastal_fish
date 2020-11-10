import { css } from "styled-components";

// Create a media template
const createMedia = (size, range = "max") => (style) => {
  return range == "min"
    ? css`
        @media (min-width: ${size / 16 + "em"}) {
          ${style}
        }
      `
    : css`
        @media (max-width: ${size / 16 + "em"}) {
          ${style}
        }
      `;
};

// Configuring Break Points
const Media = {
  desktop: createMedia(1800, "min"),
  desktopMd: createMedia(1440),
  desktopSm: createMedia(1280),
  tablet: createMedia(1024),
  tabletMd: createMedia(768),
  tabletSm: createMedia(600),
  phone: createMedia(576),
  phoneMd: createMedia(375),
  phoneSm: createMedia(320),
  //
};

export default Media;
