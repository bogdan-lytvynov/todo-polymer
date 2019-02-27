import { LitElement, html } from 'lit-element/lit-element.js';
import './todo-item';
import '@polymer/iron-selector/iron-selector.js';

const hashToFilter = hash => hash.replace('#/', '')

class TodoApp extends LitElement {
  static get properties() {
    return { 
      taskName: { type: String },
      items: { type: Array },
      filter: {type: String}
    };
  }

  constructor() {
    super();

    console.log(this.location)
    this.items = [];
    this.taskName = '';
    this.filter = hashToFilter(location.hash) || 'all'

    this.addEventListener('delete-todo-item', this.deleteItem)
    window.addEventListener("hashchange", this.onHashChange, false);
  }

  onHashChange() {
    this.filter = hashToFilter(location.hash)
  }

  onChange(e) {
    this.taskName = e.target.value;
  }

  onKeyPress(e) {
    if (e.keyCode === 13) {
      this.items.push({
        name: this.taskName,
        active: true
      });
      this.taskName = '';
    }
  }

  deleteItem({detail: {index: removedItemIndex}}) {
    this.items = this.items.filter((item, index) => index !== removedItemIndex);
  }

  getFilteredItems() {
    const filterFunctionsMap = {
      all: item => item,
      active: ({active}) => active,
      completed: ({active}) => !active
    }

    const filterFunction = filterFunctionsMap[this.filter]
    return this.items.filter(filterFunction)
  }
  
  render() {
    return html`
      <header>
        <h1>TODO</h1>
        <input 
          type="text"
          placeholder="insert the name of the task"
          .value=${this.taskName}
          @input=${this.onChange}
          @keypress=${this.onKeyPress}/> 
      </header>

         ${this.getFilteredItems().map(({name}, index) =>
           html`<todo-item
           name="${name}" 
           index="${index}"
           />
           `)} 

           <footer>
            <iron-selector>
              <div>
                <a href="#/all">All</a>
              </div>

              <div>
                <a href="#/active">Active</a>
              </div>

              <div>
                <a href="#/completed">Completed</a>
              </div>
            </iron-selector>
           </footer>
    `;
  }
}
customElements.define('todo-app', TodoApp);
