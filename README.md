# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![Screenshot 2023-03-14 at 20-19-18 Frontend Mentor Base Apparel coming soon page](https://user-images.githubusercontent.com/119544731/225179531-e69dbc91-20ba-4de1-aa75-9988f4a02796.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/responsive-page-using-css-grid-and-flexbox-UZ39r6-TUw](https://www.frontendmentor.io/solutions/responsive-page-using-css-grid-and-flexbox-UZ39r6-TUw)
- Live Site URL: [https://base-apparel-exercise.netlify.app/](https://base-apparel-exercise.netlify.app/)

## My process

### Built with

- Flexbox
- CSS Grid

### What I learned

With this project I learned how to set styles for an invalid input. Also I learned how to configure it with JS to only show the error after the user press the submit button.

```css
form.submitted .input__email:invalid {
    border-color: var(--softRed);
    border-width: 0.2rem;
}

form.submitted .input__email:invalid + .error-icon {
    visibility: visible;
}

form.submitted .input__email:invalid + .error-icon + .error-message{
    visibility: visible;
}
```
```js
const form = document.querySelector('form');
const submitButton = form.querySelector('button[type="submit"]');

submitButton.addEventListener('click', (event) => {
  form.classList.add('submitted');
});
```

## Author

- Linkedin - [Juan José Potes Gómez](https://www.linkedin.com/in/juan-jose-potes-gomez/)
- Frontend Mentor - [@J-Potes](https://www.frontendmentor.io/profile/J-Potes)
- Github - [@J-Potes](https://github.com/J-Potes)
