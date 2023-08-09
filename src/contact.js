function loadContact () {

    const contentDiv = document.querySelector('#content');

    let header = document.createElement('div');
    header.classList.add('header');

    let heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.textContent = 'Contact Dyna-Mix';

    contentDiv.appendChild(header);
    header.appendChild(heading);

    let image = document.createElement('img');
    image.classList.add('main-image');
    image.setAttribute('src', 'images/contact.jpg');
    image.setAttribute('alt', 'A pastry being sprinkled with salt');
    header.appendChild(image);   
    
    
    ////

    const mainContentDiv = document.createElement('div');
    contentDiv.appendChild(mainContentDiv);


    let phoneHeading = document.createElement('h2');
    let emailHeading = document.createElement('h2');
    let phoneInfo = document.createElement('p');
    let emailInfo = document.createElement('p');

    phoneHeading.textContent = 'Give us a call';
    emailHeading.textContent = 'Email us';
    phoneInfo.textContent = '+1 (888) 135-791   or   +1 (999) 246-802   or   +1 (777) 086-420'
    emailInfo.textContent = 'dynamix@mars.com   or   dynalovesfood@otherworld.com'

    mainContentDiv.appendChild(phoneHeading);
    mainContentDiv.appendChild(phoneInfo);
    mainContentDiv.appendChild(emailHeading);
    mainContentDiv.appendChild(emailInfo);
}

export default loadContact;