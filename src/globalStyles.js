import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  /* css reset */
  /* ========= */

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
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
    --c-text: #1D1F22;
    --c-black: #1D1F22;
    --c-white: #ffffff;
    --c-gray: #E5E5E5;
    --c-primary: #5ECE7B;
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
    color: var(--c-text);
  }

  ol,
  ul {
  list-style: none;
  }

  a{
    text-decoration: none;
  }

  .visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
  /* end css globals */


`;

export default GlobalStyle;
