function makePassword(pwLength, lowercase, uppercase, numeric, specialchars) {
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
    const nums = "0123456789"
    const specialCharacters = "~`!@#$%^&*()_+-={}[]|:;,./?>"

    const chosenOptions = []

    if (uppercase) {
        chosenOptions.push(upperCaseLetters)
    }

    if (lowercase) {
        chosenOptions.push(lowerCaseLetters)
    }

    if (numeric) {
        chosenOptions.push(nums)
    }

    if (specialchars) {
        chosenOptions.push(specialCharacters)
    }

    let passwordArr = []

    for (let i = 0; i < pwLength; i++) {
        // Pick a random array containing a rule the user chose. 
        let randomArray = chosenOptions[Math.floor(Math.random() * Math.floor(chosenOptions.length))]
        // Pick a random character of that type of array.
        let randomSelectionOfRandArr = randomArray[Math.floor(Math.random() * Math.floor(randomArray.length))]
        // Append to password array.
        passwordArr.push(randomSelectionOfRandArr)
        
    }

    let passwordString = passwordArr.join("")
    console.log(passwordString);
}
    