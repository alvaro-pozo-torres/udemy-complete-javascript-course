import axios from 'axios';
import {axiosKey, proxy} from '../config';

export default class Recipe {
    constructor(id){
        this.id = id;
    };

    async getRecipe() {
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/get?key=${axiosKey}&rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
                        
        } catch (error) {
          console.log(error);
          alert('algo fallo');
        }
    };
    calcTime() {
        const numIngredients = this.ingredients.length;
        const periods = Math.ceil(numIngredients / 3);
        this.time = periods * 15;
    };

    calcServings() {
        this.servings = 4;
    };

    parseIngredients() {
        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
        const units = [...unitsShort, 'Kg', 'g']

        const newIngredients = this.ingredients.map(el => {
            //1. uniform units
            let ingredient = el.toLowerCase();
            unitsLong.forEach((unit, i) => {
                ingredient = ingredient.replace(unit, unitsShort[i]);
            });

            //2. remove parentheses
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

            //3. parse ingredients into count, unit, and ingredient itself
            const arrIngredients = ingredient.split(' ');

            const unitIndex = arrIngredients.findIndex(el2 => units.includes(el2));

            let objIngredient;
            if (unitIndex > -1) {
                //there is an unit
                // case: 4 1/2 cups, arrcount is [4, 1/2] ==> "4+1/2"
                // case: 4 cups, arrCount is [4]

                const arrCount = arrIngredients.slice(0, unitIndex);
                let count;
                if (arrCount.length === 1) {
                    count = eval(arrIngredients[0].replace('-', '+'));
                } else {
                    count = eval(arrIngredients.slice(0, unitIndex).join('+'));
                }

                objIngredient ={
                    count,
                    unit: arrIngredients[unitIndex],
                    ingredient: arrIngredients.slice(unitIndex + 1).join(' ')
                };

            } else if (parseInt(arrIngredients[0], 10)) {
                //there is no unit, but the 1st elemeny is a number
                objIngredient = {
                    count: parseInt(arrIngredients[0], 10),
                    unit: '',
                    ingredient: arrIngredients.slice(1).join(' ')

                }
            } else if (unitIndex === -1) {
                //there is no unit and no number
                objIngredient = {
                    count: 1,
                    unit: '',
                    ingredient
                }
            };
            
            return objIngredient;

        });

        this.ingredients = newIngredients;
    }

    updateServings (type) {
        //servings
        const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1;

        //ingredients
        this.ingredients.forEach(ing => {
            ing.count *= (newServings / this.servings);
        })

        this.servings = newServings;


    }
};

