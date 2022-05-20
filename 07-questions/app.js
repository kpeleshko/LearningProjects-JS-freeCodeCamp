let toggleBtn = document.querySelectorAll('.question-btn');

toggleBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        btn.parentElement.parentElement.classList.toggle('show-text');
    })
})