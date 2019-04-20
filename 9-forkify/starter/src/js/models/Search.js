import axios from 'axios';

export default class Search{
    constructor(query){
        this.query = query;
    }

    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const axiosKey = 'ab7712e9e5932264ad164aad21b87448';
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${axiosKey}&q=${this.query}`);
    
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch (error) {
            alert(error);
        };
    
    }
};
