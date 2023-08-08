function onLoad () {
    const contentDiv = document.querySelector('#content');

    let header = document.createElement('div');
    header.classList.add('header');

    let heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.textContent = 'Dyna-Mix Restaurant';

    header.appendChild(heading);
    contentDiv.appendChild(header);

}

export default onLoad;