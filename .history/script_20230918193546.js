const wrapper = document.querySelector('.wrapper');
        const registerLink = document.querySelector('.register-link');
        const loginLink = document.querySelector('.login-link');
        
        function addActiveClass() {
            wrapper.classList.add('active');
        }

        function removeActiveClass() {
            wrapper.classList.remove('active');
        }
