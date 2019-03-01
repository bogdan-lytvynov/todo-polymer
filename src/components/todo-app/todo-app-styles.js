import { css } from 'lit-element/lit-element.js';

export const style = css`
:host {
  display: block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  padding: 30px;
}
h1 {
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}

.complete-all {
  font-size: 22px;
  border: 0;
  color: inherit;
  background-color: inherit;
  transform: rotateZ(90deg);
  outline: 0;
}

.top-navigation {
  display: flex;
}

.top-navigation task-name-input {
  flex-grow: 1;
}

iron-selector {
  display: flex;
  justify-content: flex-start;
}

iron-selector div[filter]{
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
}

.iron-selected {
  border: 1px solid rgba(175, 47, 47, 0.2);
}
`;
