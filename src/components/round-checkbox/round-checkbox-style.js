import { css } from 'lit-element/lit-element.js';

export const style = css`
:host {
  --round-checkbox-size: 20px;
  --round-checkbox-checked-color: green;

  display: inline-block;
  border-radius: 50%;
  width: var(--round-checkbox-size);
  height: var(--round-checkbox-size);
  border: 1px solid black;
  cursor: pointer;
  text-align: center;
}

:host([checked]){
  background-color: var(--round-checkbox-checked-color)
}
`;
