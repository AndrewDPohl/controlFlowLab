var longWords = ["Fugazi", "311", "Propaghandi"];
var newArray = [];
var maxLength = 11;
for (i = 0; i < longWords.length; i += 1) {
	if (longWords[i].length < maxLength) {
			newArray.push(longWords[i])
	}
}
console.log(newArray)