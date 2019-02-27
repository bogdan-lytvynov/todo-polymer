import { LitElement, html } from 'lit-element/lit-element.js';

class TodoItem extends LitElement {
  static get properties() {
    return { 
      name: { type: String },
      index: { type: Number }
    };
  }

  delete() {
    const deleteTodoItemEvent = new CustomEvent('delete-todo-item', {
      detail: {
        index: this.index 
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(deleteTodoItemEvent);
  }

  render() {
    return html`<li>
    <span>${this.name}</span>
    <button @click=${this.delete}>x</button>
    </li>`;
  }
}
customElements.define('todo-item', TodoItem);
