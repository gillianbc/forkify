export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchResults: document.querySelector('.results'),
    searchResList: document.querySelector('.results__list'),
    searchItem: document.querySelector('.searchItem'),
    recipe: document.querySelector('.recipe')
}

export const elementStrings = {
    loader: 'loader'
};
//Show the spinner
export const renderLoader = parent => {
    const loader = `
        <div class="${elementStrings.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};
//Clear the spinner
export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    //We have to go up to the parent then down to the child to remove it
    if (loader) loader.parentElement.removeChild(loader);
};
