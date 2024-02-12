document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const showCookiesBtn = document.getElementById('showCookiesBtn');

    loginBtn.addEventListener('click', setCookies);
    showCookiesBtn.addEventListener('click', showCookies);
});

function setCookies() {
    const firstNameInput = document.getElementById('firstname').value;
    const emailInput = document.getElementById('email').value;

    // Set cookies
    document.cookie = `email=${emailInput};`;
    document.cookie = `firstname=${firstNameInput};`;
}

function showCookies() {
    const cookies = document.cookie.split(';');
    const cookiesContainer = document.createElement('p');

    let cookiesText = 'Cookies: ';
    cookies.forEach(cookie => {
        cookiesText += cookie.trim() + ' ';
    });

    cookiesContainer.innerHTML = cookiesText;
    document.body.appendChild(cookiesContainer);
}
