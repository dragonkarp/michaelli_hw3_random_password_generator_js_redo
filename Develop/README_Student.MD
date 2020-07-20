## Homework 3 JS random password generator !!REDO!! ##

## Student name ##
Michael Li

## Description of the assignment ##
We were to create JS code that allowed the user to generate a random password whose length and contents would depend on user inputs. They are given a choice of a password length, from 8 to 128, and yes/no options as to whether they would like to include upper cases, lower cases, numbers, and special characters. A length must be chosen. At least one character type option must be chosen. HTML and CSS are given. 

## Development process and high level description of functionality ##
# Thoughts
I rewrote some of the given code to ES6. The code is a little wet for now. For readability, I made this very modular with the use of more functions than were necessary for the program to work. The cost is is there is more code. 

# High level description of functionality
When the listener senses the generate button being pressed, the user is prompted of the the start of the program. They then choose a length. If the length is not between, and including, 8 and 128, they are prompted to start over. If when a valid length is inputted, confirms are displayed for each of the character type options. If the user chooses no to all, they must begin again. When the final option is selected, the password is generate and written to the text box HTML. 

# High level description of code.
I began by writing "choose" functions. Only the chooseLength() function will call itself if the input is invalid. The length is returned if valid. 

The other choose functions return a true, or false. 

generatePassword() creates a function scope object with the options and with defaults values. Each choose function is called and the return values are assigned to the values of the aforementioned object. There is logic to handle the case of when the user does not choose any character options. If this is the case, generatePassword() is called again. If all inputs are valid, makePassword() is called. 

makePassword() is passed the values in the options object. It has 4 function scoped arrays for each type of character.  An empty array is instantiated. Logic populates the array with the arrays of options that the user chose. A for loop will loop for the length chosen by the user. Each loop randomly selects and array then randomly selects a character in that array. The chosen character on each loop is pushed to a previously instantiated array, passwordArr. The join() method is used on the array to create the password string and said string is returned. 

The returned password is assigned to a variable in writePassword that outputs it to the page. 
