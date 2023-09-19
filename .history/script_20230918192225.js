const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

document.addEventListener('click', function handleClick(event) {
    wrapper.classList.add('active');
});

document.addEventListener('click', function handleClick(event) {
  event.target.classList.add(
    'bg-yellow',
    'second-class',
    'third-class'
  );

  event.target.classList.remove(
    'second-class',
    'third-class'
  );
});
