const ratings = {
	"beatles": 0,
	"arnold": 5,
	"muso": 1,
	"mexican food": 4,
	"multiple screens": 1,
	"javascript": 4,
	"typescript": 5,
	"php": 0,
	"vscode": 5,
	"react": 5,
	"gatsby": 5
}

export const rate = (item) => {
	return ratings[item] || 2.5;
}
