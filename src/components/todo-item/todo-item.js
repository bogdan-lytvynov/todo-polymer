import { LitElement, html } from 'lit-element/lit-element.js';
import {style} from './todo-item-style.js'
import '../round-checkbox/round-checkbox.js'

class TodoItem extends LitElement {
  static get properties() {
    return { 
      id: {
        type: Number
      },
      name: {
        type: String 
      },
      completed: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return [style]
  }

  constructor() {
    super();
  }

  toggleActive() {
    const toggleEvent = new CustomEvent('toggle-todo-item', {
      detail: {
        id: this.id,
        completed: !this.completed
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(toggleEvent);
  }

  delete() {
    const deleteEvenet = new CustomEvent('delete-todo-item', {
      detail: {
        id: this.id
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(deleteEvenet);
  }

  render() {
    return html`
    <round-checkbox ?checked="${this.completed}" @click=${this.toggleActive}></round-checkbox>
    <div class="name">
      <slot></slot>
    </div>
    <button class="close-btn" @click=${this.delete}>×</button>
    `;
  }
}
customElements.define('todo-item', TodoItem);
