import { LitElement, html } from 'lit-element/lit-element.js';
import {style} from './task-name-input-style.js'

class TaskNameInput extends LitElement {
  static get styles() {
    return [style]
  }

  onKeyPress({keyCode, target }) {
    if (keyCode === 13) {
      const enterTaskNameEvent = new CustomEvent('enter-task-name', {
        detail: {
          taskName: target.value
        },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(enterTaskNameEvent);
      target.value = ''
    }
  }

  render() {
    return html`
        <input 
          type="text"
          placeholder="insert the name of the task"
          @keypress=${this.onKeyPress}/> 
    `
    }
}

customElements.define('task-name-input', TaskNameInput);

