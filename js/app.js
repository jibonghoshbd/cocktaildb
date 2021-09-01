// load search Cocktail 
const searchCocktail = () => {
    const searchFiled = document.getElementById('search-filed');
    const searchText = searchFiled.value;
    // clear searchText 
    searchFiled.value = '';

    // conditon no serching result 
    if (searchText == 0) {
        const writeSomething = document.getElementById('write-something')
        writeSomething.innerText = 'Please Write Something!!!!!!'
    } else {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displayCocktail(data.drinks[0]))
    }
}
// display Cocktial 
const displayCocktail = (drink) => {
    // console.log(drink)
    const displayDrinks = document.getElementById('display-drinks');
    displayDrinks.textContent = '';
    document.getElementById('write-something').innerText = '';
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
    <div class="card">
        <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${drink.strDrink}</h5>
            <p class="card-text">${drink.strInstructionsDE.slice(0, 150)}</p>
    </div>
    <button onclick="loadDetails('${drink.idDrink}')" >Details</button>
    `
    displayDrinks.appendChild(div);
}

// load Detail 
const loadDetails = (drinkId) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.drinks[0]))
}

// display detail 
const displayDetails = (drink) => {
    console.log(drink)
    const displaydetail = document.getElementById('display-detail');
    displaydetail.textContent = '';
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = ` 
    <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">strCategory: ${drink.strCategory}</h5>
                <p class="card-text">strInstructions: ${drink.strInstructions}</p>
        </div>
    `
    displaydetail.appendChild(div);
}