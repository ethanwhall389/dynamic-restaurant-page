function loadMenu () {
    const contentDiv = document.querySelector('#content');

    let header = document.createElement('div');
    header.classList.add('header');

    let heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.textContent = 'Dyna-Mix Menu';

    contentDiv.appendChild(header);
    header.appendChild(heading);

    ////

    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');
    contentDiv.appendChild(menuContent);

    const pastriesMenu = document.createElement('div');
    pastriesMenu.classList.add('pastries-menu');
    menuContent.appendChild(pastriesMenu);

    const drinksMenu = document.createElement('div');
    drinksMenu.classList.add('drinks-menu');
    menuContent.appendChild(drinksMenu);

    const pastriesHeading = document.createElement('h2');
    pastriesHeading.classList.add('pastries-heading');
    pastriesHeading.textContent = 'Pastries';
    pastriesMenu.appendChild(pastriesHeading);

    const turnover = document.createElement('p');
    turnover.classList.add('menu-option');
    turnover.textContent = 'Turnover . . . $15.00';
    pastriesMenu.appendChild(turnover);
    
    const fritter = document.createElement('p');
    fritter.classList.add('menu-option');
    fritter.textContent = 'Apple Fritter . . . $45.00';
    pastriesMenu.appendChild(fritter);
    
    const doughnut = document.createElement('p');
    doughnut.classList.add('menu-option');
    doughnut.textContent = 'Doughnut . . . $50.00';
    pastriesMenu.appendChild(doughnut);
    
    const drinksHeading = document.createElement('h2');
    drinksHeading.classList.add('drinks-heading');
    drinksHeading.textContent = 'Drinks';
    drinksMenu.appendChild(drinksHeading);

    const appleJuice = document.createElement('p');
    appleJuice.classList.add('menu-option');
    appleJuice.textContent = 'Apple Juice . . . $17.00';
    drinksMenu.appendChild(appleJuice);
    
    const milk = document.createElement('p');
    milk.classList.add('menu-option');
    milk.textContent = 'Milk . . . $22.00';
    drinksMenu.appendChild(milk);
    
    const lemonade = document.createElement('p');
    milk.classList.add('menu-option');
    milk.textContent = 'Lemonade . . . $35.00';
    drinksMenu.appendChild(lemonade);
}

export default loadMenu;