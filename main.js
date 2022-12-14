// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid 3 not valid 2 valid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4] //not valid
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9] // valid
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3] //not valid
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3] //not valid
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3] // valid

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
const validateCred = (array) => {
    let doubledArray = 0;
    let j = 1
    //return true when an array contains digits of a valid credit card number
    //start frin farthest ruight digit and move to the left
    for (let i = array.length - 1; i >= 0; i--) {
        if (j % 2 == 0) {
            let doubledValues = array[i] * 2;
            if (doubledValues > 9) {
                doubledValues = doubledValues - 9;
                doubledArray = doubledArray + doubledValues;
            }
            else {
                doubledArray = doubledArray + doubledValues
            }
        }
        else {
            doubledArray = doubledArray + array[i];
        }
        j++;
    }
    if (doubledArray % 10 === 0) {
        return true;
    }
    else {
        return false;
    }
    console.log(doubledArray)
    //return false when numbers are invalid 
    //Do not mutate values of original array
}
// Test functions
/*
console.log('Test functions for validatedCred')
validateCred(invalid1);
console.log(validateCred(valid1)); // Should print true
console.log(validateCred(invalid1)); // Should print false
*/


// Function to find invalid cards
const findInvalidCards = (nestedArray) => {
    let incorrectCards = [];
    // Search through nested array for which numbers are invalid
    // Return another nested array of invalid cards
    for (const indvidualArray of nestedArray) {
        if (validateCred(indvidualArray) === false) {
            incorrectCards.push(indvidualArray)
        }
        else {
            continue;
        }
    }
    return incorrectCards;
}
// Test functions
/*
console.log('Test functions for findInvalidCards')
findInvalidCards(batch);
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));// Shouldn't print anything
console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all of the numbers
*/


function idInvalidCardCompanies(nestedArrayInvalid) {
    // First digit of card associated with company
    const companiesResponsible = [];
    for  (const incorrectCardArray of nestedArrayInvalid) {
        switch (incorrectCardArray[0]) {
            case 3:
                if (companiesResponsible.indexOf('Amex') === -1) {
                    companiesResponsible.push('Amex');
                }
                break
            case 4:
                if (companiesResponsible.indexOf('Visa') === -1) {
                    companiesResponsible.push('Visa');
                }
                break
            case 5:
                if (companiesResponsible.indexOf('Mastercard') === -1) {
                    companiesResponsible.push('Mastercard');
                }
                break
            case 6:
                if (companiesResponsible.indexOf('Discover') === -1) {
                    companiesResponsible.push('Discover');
                }
                break
            default:
                console.log('Company not found');
        }
    }
    return companiesResponsible;
    // return array of companies that have mailed out invalid cards
}
// Test functions
console.log('Test function for idInvalidCardCompanies')
//console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
//console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
console.log(idInvalidCardCompanies(batch)); // Find out which companies have mailed out invalid cards







