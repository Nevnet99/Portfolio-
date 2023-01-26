// global styles for the app styled components

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 35%;

     ${({ theme }) => theme.minBp("tablet")} {
        font-size: 62.5%;
      }
  }
  
  body {
    background: ${({ theme: { colors } }) => colors.background};
    color: ${({ theme: { colors } }) => colors.text};
    padding: 0 ${({ theme: { spacing } }) => spacing(100)};
  }


    @font-face {
      font-family: 'Zodiak-VariableItalic';
      src: url('../fonts/Zodiak-VariableItalic.woff2') format('woff2'),
          url('../fonts/Zodiak-VariableItalic.woff') format('woff'),
          url('../fonts/Zodiak-VariableItalic.ttf') format('truetype');
          font-weight: 100 900;
          font-display: swap;
          font-style: italic;
    }


    @font-face {
      font-family: 'Zodiak-Thin';
      src: url('../fonts/Zodiak-Thin.woff2') format('woff2'),
          url('../fonts/Zodiak-Thin.woff') format('woff'),
          url('../fonts/Zodiak-Thin.ttf') format('truetype');
          font-weight: 100;
          font-display: swap;
          font-style: normal;
    }


    @font-face {
      font-family: 'Zodiak-ThinItalic';
      src: url('../fonts/Zodiak-ThinItalic.woff2') format('woff2'),
          url('../fonts/Zodiak-ThinItalic.woff') format('woff'),
          url('../fonts/Zodiak-ThinItalic.ttf') format('truetype');
          font-weight: 100;
          font-display: swap;
          font-style: italic;
    }


    @font-face {
      font-family: 'Zodiak-Light';
      src: url('../fonts/Zodiak-Light.woff2') format('woff2'),
          url('../fonts/Zodiak-Light.woff') format('woff'),
          url('../fonts/Zodiak-Light.ttf') format('truetype');
          font-weight: 300;
          font-display: swap;
          font-style: normal;
    }


    @font-face {
      font-family: 'Zodiak-LightItalic';
      src: url('../fonts/Zodiak-LightItalic.woff2') format('woff2'),
          url('../fonts/Zodiak-LightItalic.woff') format('woff'),
          url('../fonts/Zodiak-LightItalic.ttf') format('truetype');
          font-weight: 300;
          font-display: swap;
          font-style: italic;
    }


    @font-face {
      font-family: 'Zodiak-Regular';
      src: url('../fonts/Zodiak-Regular.woff2') format('woff2'),
          url('../fonts/Zodiak-Regular.woff') format('woff'),
          url('../fonts/Zodiak-Regular.ttf') format('truetype');
          font-weight: 400;
          font-display: swap;
          font-style: normal;
    }


    @font-face {
      font-family: 'Zodiak-Italic';
      src: url('../fonts/Zodiak-Italic.woff2') format('woff2'),
          url('../fonts/Zodiak-Italic.woff') format('woff'),
          url('../fonts/Zodiak-Italic.ttf') format('truetype');
          font-weight: 400;
          font-display: swap;
          font-style: italic;
    }


    @font-face {
      font-family: 'Zodiak-Bold';
      src: url('../fonts/Zodiak-Bold.woff2') format('woff2'),
          url('../fonts/Zodiak-Bold.woff') format('woff'),
          url('../fonts/Zodiak-Bold.ttf') format('truetype');
          font-weight: 700;
          font-display: swap;
          font-style: normal;
    }


    @font-face {
      font-family: 'Zodiak-BoldItalic';
      src: url('../fonts/Zodiak-BoldItalic.woff2') format('woff2'),
          url('../fonts/Zodiak-BoldItalic.woff') format('woff'),
          url('../fonts/Zodiak-BoldItalic.ttf') format('truetype');
          font-weight: 700;
          font-display: swap;
          font-style: italic;
    }


    @font-face {
      font-family: 'Zodiak-Extrabold';
      src: url('../fonts/Zodiak-Extrabold.woff2') format('woff2'),
          url('../fonts/Zodiak-Extrabold.woff') format('woff'),
          url('../fonts/Zodiak-Extrabold.ttf') format('truetype');
          font-weight: 800;
          font-display: swap;
          font-style: normal;
    }


    @font-face {
      font-family: 'Zodiak-ExtraboldItalic';
      src: url('../fonts/Zodiak-ExtraboldItalic.woff2') format('woff2'),
          url('../fonts/Zodiak-ExtraboldItalic.woff') format('woff'),
          url('../fonts/Zodiak-ExtraboldItalic.ttf') format('truetype');
          font-weight: 800;
          font-display: swap;
          font-style: italic;
    }


    @font-face {
      font-family: 'Zodiak-Black';
      src: url('../fonts/Zodiak-Black.woff2') format('woff2'),
          url('../fonts/Zodiak-Black.woff') format('woff'),
          url('../fonts/Zodiak-Black.ttf') format('truetype');
          font-weight: 900;
          font-display: swap;
          font-style: normal;
    }


    @font-face {
      font-family: 'Zodiak-BlackItalic';
      src: url('../fonts/Zodiak-BlackItalic.woff2') format('woff2'),
          url('../fonts/Zodiak-BlackItalic.woff') format('woff'),
          url('../fonts/Zodiak-BlackItalic.ttf') format('truetype');
          font-weight: 900;
          font-display: swap;
          font-style: italic;
    }

    @font-face {
  font-family: 'Satoshi-VariableItalic';
  src: url('../fonts/Satoshi-VariableItalic.woff2') format('woff2'),
       url('../fonts/Satoshi-VariableItalic.woff') format('woff'),
       url('../fonts/Satoshi-VariableItalic.ttf') format('truetype');
       font-weight: 300 900;
       font-display: swap;
       font-style: italic;
}


@font-face {
  font-family: 'Satoshi-Light';
  src: url('../fonts/Satoshi-Light.woff2') format('woff2'),
       url('../fonts/Satoshi-Light.woff') format('woff'),
       url('../fonts/Satoshi-Light.ttf') format('truetype');
       font-weight: 300;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'Satoshi-LightItalic';
  src: url('../fonts/Satoshi-LightItalic.woff2') format('woff2'),
       url('../fonts/Satoshi-LightItalic.woff') format('woff'),
       url('../fonts/Satoshi-LightItalic.ttf') format('truetype');
       font-weight: 300;
       font-display: swap;
       font-style: italic;
}


@font-face {
  font-family: 'Satoshi-Regular';
  src: url('../fonts/Satoshi-Regular.woff2') format('woff2'),
       url('../fonts/Satoshi-Regular.woff') format('woff'),
       url('../fonts/Satoshi-Regular.ttf') format('truetype');
       font-weight: 400;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'Satoshi-Italic';
  src: url('../fonts/Satoshi-Italic.woff2') format('woff2'),
       url('../fonts/Satoshi-Italic.woff') format('woff'),
       url('../fonts/Satoshi-Italic.ttf') format('truetype');
       font-weight: 400;
       font-display: swap;
       font-style: italic;
}


@font-face {
  font-family: 'Satoshi-Medium';
  src: url('../fonts/Satoshi-Medium.woff2') format('woff2'),
       url('../fonts/Satoshi-Medium.woff') format('woff'),
       url('../fonts/Satoshi-Medium.ttf') format('truetype');
       font-weight: 500;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'Satoshi-MediumItalic';
  src: url('../fonts/Satoshi-MediumItalic.woff2') format('woff2'),
       url('../fonts/Satoshi-MediumItalic.woff') format('woff'),
       url('../fonts/Satoshi-MediumItalic.ttf') format('truetype');
       font-weight: 500;
       font-display: swap;
       font-style: italic;
}


@font-face {
  font-family: 'Satoshi-Bold';
  src: url('../fonts/Satoshi-Bold.woff2') format('woff2'),
       url('../fonts/Satoshi-Bold.woff') format('woff'),
       url('../fonts/Satoshi-Bold.ttf') format('truetype');
       font-weight: 700;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'Satoshi-BoldItalic';
  src: url('../fonts/Satoshi-BoldItalic.woff2') format('woff2'),
       url('../fonts/Satoshi-BoldItalic.woff') format('woff'),
       url('../fonts/Satoshi-BoldItalic.ttf') format('truetype');
       font-weight: 700;
       font-display: swap;
       font-style: italic;
}


@font-face {
  font-family: 'Satoshi-Black';
  src: url('../fonts/Satoshi-Black.woff2') format('woff2'),
       url('../fonts/Satoshi-Black.woff') format('woff'),
       url('../fonts/Satoshi-Black.ttf') format('truetype');
       font-weight: 900;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'Satoshi-BlackItalic';
  src: url('../fonts/Satoshi-BlackItalic.woff2') format('woff2'),
       url('../fonts/Satoshi-BlackItalic.woff') format('woff'),
       url('../fonts/Satoshi-BlackItalic.ttf') format('truetype');
       font-weight: 900;
       font-display: swap;
       font-style: italic;
}


  `;

export default GlobalStyles;
