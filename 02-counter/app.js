let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        className = event.currentTarget.classList;

        if(className.contains('increse')) {
            count++;
        } else if (className.contains('decrease')) {
            count--;
        } else {
            count = 0;
        }

        value.textContent = count;
        count >= 0 ? value.style.color = 'green' : value.style.color = 'red';
    })
})