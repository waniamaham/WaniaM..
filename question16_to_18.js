"use strict";
// QUESTION NO 16: More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
let guestName = ["alina", "ayesha", "hoorain"];
console.log("Great news! I found bigger dinner table!");
// Adding more guest
guestName.unshift("lalisa");
guestName.splice(guestName.length / 2, 0, "kim jisoo");
guestName.push("lee Min Ho");
guestName.forEach(guestName => {
    console.log(`Deart ${guestName}, would you like to join me for Dinner?`);
});
// QUESTION NO 17:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests
console.log("Unfortunately, I can only invite two prople for dinner(^_^)");
while (guestName.length > 2) {
    let removedguestName = guestName.pop();
    console.log(`Sorry, ${removedguestName}, I can't invite you to dinner.due some problem(^_^)`);
}
;
guestName.forEach(guestName => {
    console.log(`dear ${guestName},you're still invited to dinner(^_^)`);
});
guestName.splice(0, guestName.length);
console.log(guestName);
// QUESTION NO 18:Seeing the World: Think of at least five places in the world you’d like to visit.
let visitPlaces = ["Saudi Arabia", "south korea", "japan", "china", "USA"];
console.log("Original order:", visitPlaces);
console.log("alphabetical order:", visitPlaces);
console.log("original order:", visitPlaces);
console.log("reversed alphabetical order:", [...visitPlaces].sort().reverse());
console.log("original order:", visitPlaces);
visitPlaces.reverse();
console.log("reversed order:", visitPlaces);
visitPlaces.reverse();
console.log("original order:", visitPlaces);
visitPlaces.sort();
console.log("alphabetical order:", visitPlaces);
visitPlaces.reverse();
console.log("reverse alphabetical order:", visitPlaces);
