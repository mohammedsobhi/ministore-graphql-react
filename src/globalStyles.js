import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  /* css reset */
  /* ========= */

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html{
    font-size: 16px;
  }

  html, body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  /* end css reset */

  /* css globals */
  /* =========== */
  :root {
    --main-font: 'Raleway', sans-serif;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul,
  label {
    font-weight: normal;
    font-family: var(--main-font);
    color: #000000;
  }
  /* end css globals */


`;

export default GlobalStyle;
