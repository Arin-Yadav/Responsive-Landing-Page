// CONTACT FORM VALIDATION

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let isValid = true;

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const destination = document.getElementById("destination");
        const date = document.getElementById("date");
        const message = document.getElementById("message");

        const fields = [name, email, destination, date, message];

        fields.forEach(field => {
            const error = field.nextElementSibling;

            if (field.value.trim() === "") {
                error.textContent = "This field is required";
                field.style.borderColor = "red";
                isValid = false;
            } else {
                error.textContent = "";
                field.style.borderColor = "#d1d5db";
            }
        });

        // Email validation
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (email.value && !email.value.match(emailPattern)) {
            email.nextElementSibling.textContent = "Enter valid email";
            email.style.borderColor = "red";
            isValid = false;
        }

        if (isValid) {
            alert("Inquiry sent successfully ✈️🌍");
            form.reset();
        }
    });
}


// MOBILE MENU TOGGLE

const menuIcon = document.getElementById("menu-icon");
const navMenu = document.querySelector("nav ul");

if (menuIcon) {
    menuIcon.addEventListener("click", () => {
        navMenu.style.display =
            navMenu.style.display === "flex" ? "none" : "flex";
    });
}