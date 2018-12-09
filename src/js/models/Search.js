import axios from 'axios';

/*
API KEY from food2fork.com
12bf391898481abb485f712e63a2f4a0
// Use this in front of the url to bypass cors restrictions on remote server
// Not needed for food2fork or fooas
const proxy = 'https://crossorigin.me/';
//If that doesn't work, try this one
const proxy2 = 'https://cors-anywhere.herokuapp.com/'
*/

export default class Search {
    constructor(query){
        this.query = query;
        this.recipes = {}
    }
    
    async getResults(query){
        console.log('In getResults');
        const key = '12bf391898481abb485f712e63a2f4a0';
        const url = 'https://www.food2fork.com/api/search';
        try {
            const res = await axios(`${url}?key=${key}&q=${this.query}`);
            console.log(res);
            this.recipes = res.data.recipes;
        } catch (error) {
            console.log('Error fetching recipses ' + error);
        }
        
    }
    showRecipes(){
        console.log(this.recipes);
    }
}
