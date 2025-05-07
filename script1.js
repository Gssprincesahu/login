document.getElementById("form-validate").addEventListener("submit", function(event) {
    event.preventDefault();
    let name= document.getElementById("username").value.trim();
    let nameError = document.getElementById("nameError");
    nameError.textContent = "";
    if (name.length < 3) {
        nameError.textContent = "* Invalid";
    } else {
        alert("Form submitted successfully!");
    }
    let password = document.getElementById("password").value.trim();
    let passwordError = document.getElementById("passwordError");
    passwordError.textContent = "";
    if (password.length < 6) {
        passwordError.textContent = "*create strong password";
    } else {
        window.open('hi.html', "_self"); 

    }
});