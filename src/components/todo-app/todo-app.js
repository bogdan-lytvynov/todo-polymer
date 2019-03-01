import '../todo-item/todo-item.js';
import '../task-name-input/task-name-input.js';
import '@polymer/iron-selector/iron-selector.js';
import { LitElement, html } from 'lit-element/lit-element.js';
import {style} from './todo-app-styles.js'

class TodoApp extends LitElement {
  static get properties() {
    return { 
      taskName: { type: String },
      items: { type: Array },
      filter: {
        type: String, 
        reflect: true
      }
    };
  }

  static get styles() {
    return [style]
  }

  constructor() {
    super();

    this.items = []
    this.nextTaskId = 0;
    this.taskName = '';
    this.filter = 'all'
  }

  onDeleteItem({detail: {id: idOfDeletedItem}}) {
    this.items = this.items.filter(({id}) => id !== idOfDeletedItem);
  }

  onToggleItem({detail: {id: idOfToggledItem, completed}}) {
    this.items = this.items.map(item => {
      return item.id === idOfToggledItem ? Object.assign({}, item, {completed}) : item
    })
  }

  onEnterTaskName({detail: {taskName}}) {
    this.items = [
      ...this.items,
      {
        id: this.nextTaskId,
        name: taskName,
        completed: false
      }
    ]

    this.nextTaskId++;
  }

  getFilteredItems() {
    const filterFunctionsMap = {
      all: item => item,
      active: ({completed}) => !completed,
      completed: ({completed}) => completed
    }

    const filterFunction = filterFunctionsMap[this.filter]
    return this.items.filter(filterFunction)
  }

  onSelectFilter(event) {
    this.filter = event.target.getAttribute('filter')
  }

  completeAll() {
    this.items = this.items.map(item => Object.assign(item, {completed: true}))
  }

  render() {
    return html`
      <header>
        <h1>TODO</h1>
        <div class="top-navigation">
          <button class="complete-all" @click=${this.completeAll}>❯</button>
          <task-name-input @enter-task-name=${this.onEnterTaskName}/>
        </div>
      </header>

         ${this.getFilteredItems()
             .map(({id, name, completed}) =>
             html`<todo-item 
             id="${id}" 
             name="${name}" 
             ?completed="${completed}"
             @delete-todo-item="${this.onDeleteItem}"
             @toggle-todo-item="${this.onToggleItem}"
             >
              <span class="item-name">${name}</span>
             </todo-item>`)} 

           <footer>
            <iron-selector selected="${this.filter}" attr-for-selected="filter">
              <div filter="all" @click=${this.onSelectFilter}>All</div>
              <div filter="active" @click=${this.onSelectFilter}>Active</div>
              <div filter="completed" @click=${this.onSelectFilter}>Completed</div>
            </iron-selector>
           </footer>
    `;
  }
}
customElements.define('todo-app', TodoApp);

export default TodoApp
