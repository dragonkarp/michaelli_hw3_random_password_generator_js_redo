// Assignment Code

// Write password to the #password input
function writePassword() {
  let password = generatePassword()
  // let passwordText = document.querySelector("#password")
  // passwordText.value = password
  $("#password").val(password)
}

function generatePassword() {
  alert("Let's get you a new password!")

  let userPreferences = {
    "length" : 0,
    "lowercase" : false,
    "uppercase" : false,
    "numeric" : false,
    "specialchars" : false
  }

  userPreferences.length = chooseLength()
  userPreferences.lowercase = chooseLowercase()
  userPreferences.uppercase = chooseUppercase() 
  userPreferences.numeric = chooseNumeric()
  userPreferences.specialchars = chooseSpecialChars()

  let oneCondition = (userPreferences.lowercase ||
                      userPreferences.uppercase ||
                      userPreferences.numeric ||
                      userPreferences.specialchars)

  if (!oneCondition) {
    alert("You have to choose at least 1 condition in addition to the length of your password.")
    generatePassword()
  }
  else {
    makePassword(userPreferences.length, userPreferences.lowercase, userPreferences.uppercase, userPreferences.numeric, userPreferences.specialchars)
  }

}

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

function chooseLength() {
  let length = prompt("Choose a length for your password between 8 and 128 characters.")
  if ((length < 8) || (length > 128))  { //
    alert("You have to pick a number between 8 and 128!")
    chooseLength()
  }
  else {return length}
}

function chooseLowercase() {
  let lowercase = confirm("Would you like lower cases in your password?")
  if (lowercase) {
    return true
  }
  else {return false}
}

function chooseUppercase() {
  let uppercase = confirm("Would you like upper cases in your password?")
  if (uppercase) {
    return true
  }
  else {return false}
}

function chooseNumeric() {
  let numeric = confirm("Would you like numbers in your password?")
  if (numeric) {
    return true
  }
  else {return false}
}

function chooseSpecialChars() {
  let specialChars = confirm("Would you like special characters in your password?")
  if (specialChars) {
    return true
  }
  else {return false}
}


// Add event listener to generate button
$("#generate").on("click", () => {
  writePassword()
})