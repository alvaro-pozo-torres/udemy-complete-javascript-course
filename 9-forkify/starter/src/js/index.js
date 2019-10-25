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
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
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
            recipeView.renderRecipe(
                state.recipe,
                state.likes.isLiked(id)
                );
            
        } catch (err) {
            alert('Error processing recipe');
        }
    }
};

 ['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

 /**
 * LIST CONTROLER
 */
const controlList = () => {
    //create a new list IF there is none yet
    if (!state.list) state.list = new List();

    //add each ingredient to the list and UI
    state.recipe.ingredients.forEach( el => {
        const item =  state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });
}

//handle delete and update list item events
elements.shopping.addEventListener('click', el =>{
    const id = el.target.closest('.shopping__item').dataset.itemid;

    //handle delete event
    if (el.target.matches('.shopping__delete, .shopping__delete *')) {
        //delete from state
        state.list.deleteItem(id);

        //delete from user interface
        listView.deleteItem(id);

        //handle count value update
    } else if (el.target.matches('.shopping__count-value')) {
        const val = parseFloat(el.target.value, 10);
        state.list.updateCount(id, val);
    }
});

 /**
 * LIKE CONTROLER
 */

const controlLike = () => {
    
    if (!state.likes) state.likes = new Likes();

    const currentID = state.recipe.id;

    // user has not yet liked current recipe
    if (!state.likes.isLiked(currentID)) {
        //ADD LIKE TO THE STATE
        const newLike = state.likes.addLike(
            currentID,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img
        );

        //toggle the like button
        likesView.toggleLikeBtn(true);
        //add like to the UI list
        likesView.renderLikes(newLike);
        
    // user has liked current recipe
    } else {
        //remove LIKE from THE STATE
        state.likes.deleteLike(currentID);
        //toggle the like button
        likesView.toggleLikeBtn(false);

        //remove like from the UI list
        likesView.deleteLike(currentID);
    }
    likesView.toggleLikeMenu(state.likes.getNumLikes());
};

// restore liked recipes on page load
window.addEventListener('load', () => {
    state.likes = new Likes();

    //restore likes
    state.likes.readStorage();

    //toggle like menu button
    likesView.toggleLikeMenu(state.likes.getNumLikes());

    //render the existing likes
    state.likes.likes.forEach(like => likesView.renderLikes(like));
});

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
    } else if (el.target.matches('.recipe__btn--add, .recipe__btn--add *')) {  
        //add ingredients to the shopping list 
        controlList();
    } else if (el.target.matches('.recipe__love, .recipe__love *')) {
        // Like controller
        controlLike();
    }
 });




