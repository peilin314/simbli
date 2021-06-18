let firstN = document.getElementById("firstName");
let lastN = document.getElementById("lastName");
let email = document.getElementById("email");
let pw = document.getElementById("password");
let confirmPw = document.getElementById("confirmPw");
if (pw.value != confirmPw.value) {
	alert("Passwords do not match!");
	// return -1;
}
let phone = document.getElementById("phone");
const saveBtn = document.getElementById('saveBtn');
// document.write(toPrint);

const database = firebase.database();

saveBtn.addEventListener('click', (e) => {
	e.preventDefault();
	database.ref('/names/' + firstN.value).set({
	//	firstN: firstN.value,
		lastN: lastN.value,
		email: email.value,
		pw: pw.value,
		phone: phone.value
	});
});