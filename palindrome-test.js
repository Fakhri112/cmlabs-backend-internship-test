function palindrome(str) {
	str = str.toLowerCase();
	let newStr = "";
	const regex = /^[a-zA-Z0-9]+$/;
	for (let i = 0; i < str.length; i++) {
		if (regex.test(str.charAt(i))) {
			newStr += str.charAt(i);
		}
	}
	let strLength = newStr.length;
	if (strLength % 2 == 0) {
		let str1 = newStr.slice(0, strLength / 2);
		let str2 = newStr.slice(strLength / 2);
		str2 = [...str2].reverse().join("");
		return str1 == str2;
	} else {
		const theMiddle = Math.floor(newStr.length / 2);
		let str1 = newStr.slice(0, theMiddle);
		let str2 = newStr.slice(theMiddle + 1);
		str2 = [...str2].reverse().join("");
		return str1 == str2;
	}
}

palindrome("eye");
