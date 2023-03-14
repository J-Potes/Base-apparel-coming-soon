// document.querySelector('form').addEventListener('submit', function(event) {
//     var emailInput = document.querySelector('#email');
    
//     if (!emailInput.validity.valid) {
//       emailInput.style.border = '2px solid red';
//       event.preventDefault();
//     }
//   });

// document.querySelectorAll('input__container[data-error] .input__email').forEach(inpEl => {
//     inpEl.addEventListener('input__email', () => inpEl.parentElement.removeAttribute('data-error'));
// });
const form = document.querySelector('form');
const submitButton = form.querySelector('button[type="submit"]');

submitButton.addEventListener('click', (event) => {
  form.classList.add('submitted');
});
