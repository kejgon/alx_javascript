// document.addEventListener('DOMContentLoaded', () => {
//     const loginBtn = document.getElementById('loginBtn');
//     const showCookiesBtn = document.getElementById('showCookiesBtn');

//     loginBtn.addEventListener('click', setCookies);
//     showCookiesBtn.addEventListener('click', showCookies);
// });

// function setCookies() {
//     const firstNameInput = document.getElementById('firstname').value;
//     const emailInput = document.getElementById('email').value;

//     // Set cookies
//     document.cookie = `firstname=${firstNameInput};`;
//     document.cookie = `email=${emailInput};`;
// }

// function showCookies() {
//     const cookies = document.cookie.split(';');
//     const cookiesContainer = document.createElement('p');

//     let cookiesText = 'Cookies: ';
//     cookies.forEach(cookie => {
//         cookiesText += cookie.trim() + ' ';
//     });

//     cookiesContainer.innerHTML = cookiesText;
//     document.body.appendChild(cookiesContainer);
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const loginBtn = document.getElementById('loginBtn');
//     const showCookiesBtn = document.getElementById('showCookiesBtn');

//     loginBtn.addEventListener('click', setCookies);
//     showCookiesBtn.addEventListener('click', showCookies);
// });

// function setCookies() {
//     const firstNameInput = document.getElementById('firstname').value;
//     const emailInput = document.getElementById('email').value;

//     // Set cookies to expire in 10 days
//     const expirationDate = new Date();
//     expirationDate.setDate(expirationDate.getDate() + 10);
//     const expires = "expires=" + expirationDate.toUTCString();

//     // Set cookies
//     document.cookie = `firstname=${firstNameInput}; expires=${expires}; path=/`;
//     document.cookie = `email=${emailInput}; expires=${expires}; path=/`;
// }

// function showCookies() {
//     const cookies = document.cookie.split(';');
//     const cookiesContainer = document.createElement('p');

//     let cookiesText = 'Cookies: ';
//     cookies.forEach(cookie => {
//         cookiesText += cookie.trim() + ' ';
//     });

//     cookiesContainer.innerHTML = cookiesText;
//     document.body.appendChild(cookiesContainer);
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const loginBtn = document.getElementById('loginBtn');
//     const showCookiesBtn = document.getElementById('showCookiesBtn');

//     loginBtn.addEventListener('click', setCookies);
//     showCookiesBtn.addEventListener('click', showCookies);
// });

// function setCookies() {
//     const firstNameInput = document.getElementById('firstname').value;
//     const emailInput = document.getElementById('email').value;

//     // Set cookies to expire in 10 days
//     const expirationDate = new Date();
//     expirationDate.setDate(expirationDate.getDate() + 10);
//     const expires = "expires=" + expirationDate.toUTCString();

//     // Set cookies
//     document.cookie = `firstname=${firstNameInput}; expires=${expires}; path=/`;
//     document.cookie = `email=${emailInput}; expires=${expires}; path=/`;
// }

// function showCookies() {
//     const email = getCookie('email');
//     const firstName = getCookie('firstname');

//     const cookiesContainer = document.createElement('p');
//     cookiesContainer.innerHTML = `Email: ${email} - Firstname: ${firstName}`;
//     document.body.appendChild(cookiesContainer);
// }

// function getCookie(name) {
//     const decodedCookie = decodeURIComponent(document.cookie);
//     const cookies = decodedCookie.split(';');
//     for (let cookie of cookies) {
//         const [cookieName, cookieValue] = cookie.split('=');
//         if (cookieName.trim() === name) {
//             return cookieValue;
//         }
//     }
//     return '';
// }


document.addEventListener('DOMContentLoaded', () => {
    showWelcomeMessageOrForm();
    document.getElementById('loginBtn').addEventListener('click', setCookies);
});

function setCookies() {
    const firstNameInput = document.getElementById('firstname').value;
    const emailInput = document.getElementById('email').value;

    // Set cookies to expire in 10 days
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 10);
    const expires = "expires=" + expirationDate.toUTCString();

    // Set cookies
    document.cookie = `firstname=${encodeURIComponent(firstNameInput)}; expires=${expires}; path=/`;
    document.cookie = `email=${encodeURIComponent(emailInput)}; expires=${expires}; path=/`;

    showWelcomeMessageOrForm();
}

function showCookies() {
    const email = getCookie('email');
    const firstName = getCookie('firstname');

    const cookiesContainer = document.createElement('p');
    cookiesContainer.textContent = `Email: ${email} - Firstname: ${firstName}`;
    document.body.appendChild(cookiesContainer);
}

function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return '';
}

function deleteCookiesAndShowForm() {
    document.cookie = 'firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    showForm();
}

function showForm() {
    const welcomeMessage = document.getElementById('welcomeMessage');
    if (welcomeMessage) {
        welcomeMessage.style.display = 'none';
    }
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.style.display = 'block';
    }
}

function hideForm() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.style.display = 'none';
    }
}

function showWelcomeMessageOrForm() {
    const firstName = getCookie('firstname');
    if (firstName) {
        hideForm();
        const welcomeMessage = document.getElementById('welcomeMessage');
        welcomeMessage.style.display = 'block';
        welcomeMessage.textContent = `Welcome ${decodeURIComponent(firstName)}`;
        const logoutLink = document.createElement('a');
        logoutLink.href = '#';
        logoutLink.textContent = '(logout)';
        logoutLink.id = 'logout';
        logoutLink.style.fontWeight = 'normal';
        logoutLink.style.fontStyle = 'italic';
        logoutLink.style.marginLeft = '10px';
        logoutLink.addEventListener('click', function () {
            deleteCookiesAndShowForm();
            welcomeMessage.style.display = 'none';
        });
        welcomeMessage.appendChild(logoutLink);
    } else {
        showForm();
    }
}

