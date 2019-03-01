import { LitElement, html } from 'lit-element/lit-element.js';
import {style} from './round-checkbox-style.js'

class RoundCheckbox extends LitElement {
  static get properties() {
    return { 
      checked: {
        type: Boolean,
        reflect: true
      }
    };
  }

  constructor() {
    super()

    this.addEventListener('click', this.onClick)
  }

  onClick() {
    this.checked = !this.checked;
  }

  static get styles() {
    return [style]
  }
}
customElements.define('round-checkbox', RoundCheckbox);
