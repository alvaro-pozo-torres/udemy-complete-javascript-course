import {elements} from './base';

export const getInput = () => elements.searchInput.value;
export const clearInput = () => {
    elements.searchInput.value = '';
    
};
export const clearResults = () => {
    elements.searchResList.innerHTML = '';
    elements.searchResultsPages.innerHTML = '';
};

export const highLightSelected = id => {
    const resultsArr = Array.from(document.querySelectorAll('.results__link'));
    resultsArr.forEach(elem => {
        elem.classList.remove('results__link--active');
    });
    document.querySelector(`.results__link[href="#${id}"]`).classList.add('results__link--active');
};


export const limitRecipe = (title, limit = 17)   => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((accumulator, current) => {
            if (accumulator + current.length <= limit) {
                newTitle.push(current);
            }
            return accumulator + current.length;
        }, 0);
        return `${newTitle.join(' ')}`+' ...';
    }
    return title;
};

const renderRecipe = recipe => {
    const markup = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipe(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

// typeOfButton [prev, next]

const createButton = (page, typeOfButton) => `
    <button class="btn-inline results__btn--${typeOfButton}" data-goto=${typeOfButton === 'prev' ? page -1 : page + 1}>
        <span>Page ${typeOfButton === 'prev' ? page -1 : page + 1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${typeOfButton === 'prev' ? 'left' : 'right'}"></use>
        </svg>
        
    </button>
    `;

const renderButtons = (page, numResults, resultsPerPage) => {
    const pages = Math.ceil(numResults / resultsPerPage);

    let button;
    if (page === 1 && pages > 1) {
        //only button to go to next page
        button = createButton(page, 'next');
    } else if (page === pages && pages > 1) {
        // onlu button to go to previous page
        button = createButton(page, 'prev');
    } else if (page < pages) {
        // both buttons 
        button = `
        ${createButton(page, 'prev')}
        ${createButton(page, 'next')}
        `
    };
    elements.searchResultsPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (recipes, page = 1, resultsPerPage = 10 ) => {
    const start = (page-1) * resultsPerPage;
    const end = page * resultsPerPage;

    recipes.slice(start, end).forEach(renderRecipe);
    
    renderButtons(page, recipes.length, resultsPerPage);

};