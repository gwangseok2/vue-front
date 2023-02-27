function validPassword(password) {
	return password.length > 1 ? true : false;
}

function validateEmail(email) {
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}

export { validateEmail, validPassword };
