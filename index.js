// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into 
// Firestore under the path /messages/:documentId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await admin.firestore().collection('messages').add({original: original});
  // Send back a message that we've successfully written the message
  res.json({result: `Message with ID: ${writeResult.id} added.`});
});

// Listens for new messages added to /messages/:documentId/original and creates an
// uppercase version of the message to /messages/:documentId/uppercase
exports.makeUppercase = functions.firestore.document('/messages/{documentId}')
    .onCreate((snap, context) => {
      // Grab the current value of what was written to Firestore.
      const original = snap.data().original;

      // Access the parameter `{documentId}` with `context.params`
      functions.logger.log('Uppercasing', context.params.documentId, original);
      
      const uppercase = original.toUpperCase();
      
      // You must return a Promise when performing asynchronous tasks inside a Functions such as
      // writing to Firestore.
      // Setting an 'uppercase' field in Firestore document returns a Promise.
      return snap.ref.set({uppercase}, {merge: true});
    });

// This is where the classes are stored
function Corporation(name) {
  this.name = name;
  
  // probably use this for let variables 
  Object.defineProperty(this, 'name', {
    get: function() {
      return name;
    },
    set: function(value) {
      this.name = value;
    }
  });
  // array of stores
  let stores = [];
  // info
}
// var name = window.prompt("What is your name?");
const corp = new Corporation('Starbucks');
console.log(corp.name);


// Store parameter can be empty or by name/number?
function Store() {
  let address;
  let openingHours = [];
  let closingHours = [];
  let shiftTimes = [];
  // chat function
}

function Employer(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  Object.defineProperty(this, 'name', {
    get: function() {
      return `${this.firstName} ${this.lastName}`;
    },
    set: function(fName, lName) {
      this.firstName = fName;
      this.lastName = lName;

    }
  });
  let availability;
  let daysOff; // a function
}
const em = new Employer('Bob', 'Ross');
console.log(em.name);

function Employee(name) {
  this.name = name;
  let availability;
  let daysOff;
  let priority;
  let role;
}

// use these functions like
// let employee1 = new Employee(Bob);


function myFunction(x) {
  x.classList.toggle("change");
}