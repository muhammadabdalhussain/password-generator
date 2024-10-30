
    // Math.random function 0 to 1 ka diffrence m koi bh value generate kar ka data ha
    //(charAt) ya hamy string sa value la kar da ga hamary input m.

    
    // math.random yaha par ak value generate karay ga jisy hm string m store karwa la ga and math.floor function use karny sa value decimal ma nahi ayge
    // genPassword = upperChars.charAt(Math.floor(Math.random() * upperChars.length));

    let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let Uppercase = document.getElementById("Uppercase");
let Numbers = document.getElementById("Numbers");
let Symbols = document.getElementById("Symbols");
let genBtn = document.getElementById("genBtn");

// Showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener("click", () => {
    passBox.value = generatePassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "!@#$%^&*(){}:;<>|";

// Function to Generate Password
function generatePassword() {
    let genPassword = "";
    let allChars = "";

    // Build the character set based on user selection
    allChars += lowercase.checked ? lowerChars : "";
    allChars += Uppercase.checked ? upperChars : "";
    allChars += Numbers.checked ? allNumbers : "";
    allChars += Symbols.checked ? allSymbols : "";

    // Check if any character types are selected
    if (allChars === "") {
        return "Please select at least one character type."; // Provide user feedback
    }

    // Get the desired password length from the slider
    const passwordLength = parseInt(inputSlider.value, 10);

    // Generate the password of the specified length
    for (let i = 0; i < passwordLength; i++) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    return genPassword;
}
