import Component from '../Component/Component.js';

export default class Sorting extends Component {
    constructor({element}){
        super({ element });

        this._render();

        this._el.addEventListener('change', e => this._onSortSelect(e));
    }

    _onSortSelect(e){
        //debugger;
        let selectedValue = e.target.options[e.target.selectedIndex].value;
        if(selectedValue){
            let customEvent = new CustomEvent('sortChange', {
                detail: selectedValue,
              });
              this._el.dispatchEvent(customEvent)
        }
    }

    _render(){
        this._el.innerHTML = `
        <div class = "row">
            <label>Sorting</label>
               <select style="display:inline">
                  <option value = "" disabled selected>Select field to sort</option>
                  <option value = "name">Name</option>
                  <option value = "symbol">Symbol</option>
                  <option value = "rank">Rank</option>
                  <option value = "price">Price</option>
               </select>               
        </div>
        `;
    }
}