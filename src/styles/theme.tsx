import { Breakpoints } from "@models/Breakpoints";
import { Theme } from "@models/Theme";

const breakpointValues: {
  [key in Breakpoints]: number;
} = {
  mobile: 375,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
};

const setBreakpoint = (breakpoint: Breakpoints) => {
  if (typeof breakpoint === "string" && breakpoint in breakpointValues)
    return breakpointValues[breakpoint];

  return breakpoint;
};

// convert pixels to rem
const pxToRem = (px: number) => `${px / 16}rem`;

const theme: Theme = {
  colors: {
    background: "#000",
    text: "#fff",
    accent: "#8162D7",
    accent2: "#5B21FF",
  },
  radius: (type) => {
    if (!type) return null;

    const radiusValues = {
      sm: "4px",
      complete: "100%",
    };

    return radiusValues[type];
  },
  spacing: (value) => {
    if (!value) return null;

    return pxToRem(value);
  },
  fontSize: (value) => {
    if (!value) return null;

    return pxToRem(value);
  },
  typography: (type) => {
    if (!type) return null;

    const typographyValues = {
      "large-title": `
        font-size: ${theme.fontSize(180)};
        font-weight: 900;
        font-family: 'Satoshi', sans-serif;
        letter-spacing: 0.05rem;
        line-height: 1;
      `,
      "secondary-title": `
        font-size: ${theme.fontSize(128)};
        font-weight: 900;
        font-family: 'Satoshi', sans-serif;
      `,
      "tertiary-title": `
        font-size: ${theme.fontSize(98)};
        font-weight: 900;
        font-family: 'Satoshi Black', sans-serif;
        letter-spacing: 0.2rem;
        line-height: 1;
      `,
      "body-title": `
        font-size: ${theme.fontSize(64)};
        font-weight: 600;
        font-family: 'Satoshi Black', sans-serif;
      `,
      "body-sub": `
        font-size: ${theme.fontSize(40)};
        font-weight: 300;
        font-family: 'Satoshi Black', sans-serif;
      `,
      "body-text": `
        font-size: ${theme.fontSize(36)};
        font-weight: 300;
        font-family: 'Zodiak Regular', sans-serif;
      `,
      "body-small": `
        font-size: ${theme.fontSize(20)};
        font-weight: 300;
        font-family: 'Satoshi Black', sans-serif;
      `,
    };

    return typographyValues[type];
  },
  minBp: (breakpoint) => `@media (min-width: ${setBreakpoint(breakpoint)}px)`,
};

// ! EXAMPLE USAGE
// ${({ theme }) => theme.minBp('tablet')} {
//   padding: 0 80px;
// }
// ${({ theme }) => theme.minBp('desktop')} {
//   padding: 0 150px;
// }

export default theme;
