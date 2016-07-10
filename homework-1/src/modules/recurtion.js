function consoleRec(arrayOfWords, startIndex) {
	try {
		if (arrayOfWords[startIndex]) {
			console.log(arrayOfWords[startIndex]);
			let nextIndex = startIndex + 1;
			consoleRec(arrayOfWords, nextIndex);
		}
	} catch (err) {
		console.log('Error ' + err.name + ': ' + err.message)
	}
}

module.exports = consoleRec;