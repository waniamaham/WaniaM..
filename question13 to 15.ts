// QUESTION NO 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
// and make a list that stores several examples. Use your list to print a series of statements about these items, 
// such as “I would like to own a Honda motorcycle.”

let favTransportation:string[] = ["Honda motorcycle","Lamborghini car","cervelo bicycle"]
favTransportation.forEach(favTransportation=>{
    console.log(`I would like to own a ${favTransportation}`);
});

// QUESTION NO 14:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.

let guestName:string[] = ["alina","sadqa","Noor"];
guestName.forEach(guestName=>{
    console.log(`Dear prettiest ${guestName}, would you like to join me for Dinner?`);
});

// QUESTION NO 15:Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let unableToAttend = "sadqa";
console.log(`${unableToAttend}can't make it to dinner.`);

// replace the guest
let newGuest = "zoha";
guestName[guestName.indexOf(unableToAttend)] = newGuest;

// new invitations
guestName.forEach(guestName =>{
    console.log(`Dear prettiest ${newGuest}, would you like to join me for dinner?`);
});

