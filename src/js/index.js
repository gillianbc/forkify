import Search from './models/Search';
import { elements } from './views/base';
import { getInput } from './views/searchView';
const search = new Search('cheese');
/**
 * Global state of the app
 * Search object
 * Current recipe object
 * Shopping list object
 * Liked recipes
 */
const state = {};

const controlSearch = async () => {
    //1.  Get the query from the view
    const query = getInput();
    console.log(query);
    //2.  Create search
    if (query) {
        state.search = new Search(query);
    }
    //3.  Prepare the UI
    //4.  Do the search
    await state.search.getResults(query);
    //5.  Render results on UI
    state.search.showRecipes();
}
elements.searchForm.addEventListener('submit',e => {
    e.preventDefault();  //don't just reload the page
    controlSearch();
})


