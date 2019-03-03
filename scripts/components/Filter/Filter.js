import Component from '../Component/Component.js';

export default class Filter extends Component {
    constructor({element}){
        super({ element });

        this._render();

        this._el.addEventListener('change', e => this._onFilterChange(e));
        this._el.addEventListener('input', e => this._onFilterChange(e));
    }

    _onFilterChange(e) {
        let filter = this._el.querySelector('select');
        let selectedFilter = filter.options[filter.selectedIndex].value;
        let filterValue = this._el.querySelector('input').value;
        if (selectedFilter && filterValue.length >= 3){
            let customEvent = new CustomEvent('filter', {
                detail: {
                    selectedFilter: selectedFilter,
                    filterValue: filterValue,
                },
              });
              this._el.dispatchEvent(customEvent)
        }
    }

    _render(){
        this._el.innerHTML = `
        <div class = "row">
            <select style="display:inline" class="col s6">
                <option value = "" disabled selected>Select field to filter</option>
                <option value = "name">Name</option>
                <option value = "symbol">Symbol</option>
            </select>  
            <div class="input-field col s6">
                <input id="filter_by" type="text">
                <label for="filter_by">Filter By</label>
            </div>             
        </div>
        `;
    }
}