document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        document.cookie = `userID=${email}; max-age=3600; path=/`;
        form.submit();
    });
});
