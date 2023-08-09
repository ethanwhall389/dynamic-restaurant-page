function onLoad () {
    const contentDiv = document.querySelector('#content');

    let header = document.createElement('div');
    header.classList.add('header');

    let heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.textContent = 'Dyna-Mix Restaurant';

    header.appendChild(heading);
    contentDiv.appendChild(header);

    ////

    let mainContentDiv = document.createElement('div');
    mainContentDiv.classList.add('main-content');

    let image = document.createElement('img');
    image.classList.add('main-image');
    image.setAttribute('src', 'images/bakery.jpg');
    image.setAttribute('alt', 'A bakery');
    
    let info = document.createElement('p');
    info.classList.add('info');
    info.textContent = 'Dyna-Mix is a small family-owned bakery based on Mars. We don\'t get many customers out here, so we\'d love to have you! All purchases over $30 recieve a complimentary oxygen tank you can use on your journey back to earth. Come visit us today!';
    
    contentDiv.appendChild(mainContentDiv);
    mainContentDiv.appendChild(image);
    mainContentDiv.appendChild(info);


    ////

    // let footer = document.createElement('div');
    // footer.classList.add('footer');

    // let footerContent = document.createElement('a');
    // footerContent.classList.add('footer-content');
    // footerContent.setAttribute('href', 'https://github.com/ethanwhall389/dynamic-restaurant-page');
    // footerContent.setAttribute('target', '_blank');
    // footerContent.textContent = 'Designed by Ethan Hall';

    // contentDiv.appendChild(footer);
    // footer.appendChild(footerContent);



}

export default onLoad;