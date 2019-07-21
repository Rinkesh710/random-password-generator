

var passwordCharacters =
    [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
        "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
        "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    ];

var randomPassword = "";

function generateRandomPassword(passwordLen) {
    randomPassword = "";
    console.log(passwordCharacters.length);
    for (let i = 0; i < passwordLen; i++) {
        randomPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    }

    return randomPassword;

    // console.log("The Final Generated Password is: " + randomPassword);
}

var generatePasswordButton = document.getElementById("generatePassword");
generatePasswordButton.addEventListener("click", () => {
    // document.getElementById("passwordToDisplay").textContent.rese
    setTimeout(() => {
        document.getElementById("passwordToDisplay").textContent = generateRandomPassword(document.getElementById("passwordLength").value);
    });
})

var passwordLength = document.getElementById("passwordLength");
passwordLength.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        setTimeout(() => {
            document.getElementById("passwordToDisplay").textContent = generateRandomPassword(document.getElementById("passwordLength").value);
        });
    }
})

var passwordLengthSlider = document.getElementById("password-length-slider");
passwordLengthSlider.addEventListener("change", () => {
    console.log("Called");
    document.getElementById("passwordLength").value = passwordLengthSlider.value;
})