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
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import {elements, renderLoader, clearLoader} from './views/base';



/* global state of the app
 * - Search Object
 * - Current recipe object
 * - shopping list object
 * - liked pages
*/

const state = {};

/**
 * SEARCH CONTROLER
 */
const controlSearch = async () => {
    //1. get query from the view
    const query = searchView.getInput();
            
    if (query) {
        //2. new search object and add to state
        state.search = new Search(query);

        //3. prepar UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchResults);

        try {
            //4. search for recipes
            await state.search.getResults();
            
            //5. render results on UI
            clearLoader();

            searchView.renderResults(state.search.result); 

        } catch (err) {
            alert ('something went wrong with the search...');
            clearLoader();
        };

    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResultsPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

/**
 * RECIPE CONTROLER
 */

const controlRecipe = async () => {
    //get the id from URL
    const id = window.location.hash.replace('#', '');

    console.log(id);
        
    if (id) {
        //prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        //highlight selected search item
        if (state.search) searchView.highLightSelected(id);
        
        //create new recipe object
        state.recipe = new Recipe(id);
        
        try {
            // get recipe data
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            // calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();
            
            // render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe);
            console.log(state.recipe);

        } catch (err) {
            alert('Error processing recipe');
        }
    }
};

 ['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));
 
 // handling recipe button clicks
 elements.recipe.addEventListener('click', el => {
    if (el.target.matches('.btn-decrease, .btn-decrease *')) {
        //decrease button is cliecked
        if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }
        
    }

    if (el.target.matches('.btn-increase, .btn-increase *')) {
        //increase button is cliecked
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    }

 })


