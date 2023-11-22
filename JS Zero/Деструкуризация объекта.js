// 'use strict'

// const person = {
//     firstName: 'Otto',
//     lastName: 'Os',
//     webSite: 'gmail.com'
// };

// const {firstName: herName, lastName: clockName, webSite: site} = person;

// console.log(herName);
// console.log(clockName);
// console.log(site);

// const person = {
//     firstName: {
//         familyName: 'Miha'
//     }
// };

// const {firstName: {familyName: surName}} = person
// //эквивалент const surname = profile.firstName.familyName
// console.log(surName)

// Declare three variables:
let firstName, lastName, website;

// Extract values to the three variables above:
({ firstName, lastName, website } = {
  firstName: "Oluwatobi", 
  lastName: "Sofela", 
  website: "codesweetly.com"
});

// Invoke the three variables:
console.log(firstName); // "Oluwatobi"
console.log(lastName); // "Sofela"
console.log(website); // "codesweetly.com"