const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

document.addEventListener('click', function handleClick(event) {
    wrapper.classList.add('active');
});

document.addEventListener('click', function handleClick(event) {
  wrapper.add('active');

  event.target.classList.remove('a');
});
