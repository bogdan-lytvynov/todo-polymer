import { css } from 'lit-element/lit-element.js';

export const style = css`
:host {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
  position: relative;
  padding: 10px 0;
}

:host(:last-of-type){
  border: 0;
}

round-checkbox {
  --round-checkbox-checked-color: orange;
  --round-checkbox-size: 24px;
}


.name {
  flex-grow: 1;
  margin-left: 20px;
}

.close-btn {
  color: #af5b5e;
  font-size: 30px;
  border: 0;
  background-color: inherit;
  cursor: pointer;
  outline: none;
}
`;
