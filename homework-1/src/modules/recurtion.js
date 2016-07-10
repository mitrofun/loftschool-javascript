function consoleRec(words, startPoint) {
	try {
		if (words[startPoint]) {
			console.log(words[startPoint]);
			let nextPoint = startPoint + 1;
			consoleRec(words, nextPoint);
		}
	} catch (err) {
		console.log('Error ' + err.name + ': ' + err.message)
	}
}

module.exports = consoleRec;