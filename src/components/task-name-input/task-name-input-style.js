import { css } from 'lit-element/lit-element.js';

export const style = css`
:host {
  display: block;
}
input {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    padding: 16px 16px 16px 30px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    background: #f5f5f5;
    color: #4d4d4d;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    outline: none;
}
`;
