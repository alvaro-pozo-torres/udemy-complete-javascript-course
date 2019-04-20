/*----- IMPORT OPTIONS----
import str from './models/Search';

//import {add, multiply, ID} from './views/searchView';

//import {add as suma, multiply as mult, ID} from './views/searchView';

import * as searchView from './views/searchView';


console.log(`Using imported values. Default: ${str}, named: ${searchView.add(2, 3)}, multiplicacion: ${searchView.multiply(5, searchView.ID)}`);

*/

//food2fork APÏ key: ab7712e9e5932264ad164aad21b87448 
//food2fork URL: https://www.food2fork.com/api/search

import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';

/* global state of the app
 * - Search Object
 * - Current recipe object
 * - shopping list object
 * - liked pages
*/

const state = {};

const controlSearch = async () => {
    //1. get query from the view
    const query = searchView.getInput();
        
    if (query) {
        //2. new search object and add to state
        state.search = new Search(query);

        //3. prepar UI for results
        searchView.clearInput();
        searchView.clearResults();

        //4. search for recipes
        await state.search.getResults();

        //5. render results on UI
        console.log(state.search.result)

        searchView.renderResults(state.search.result)
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});



