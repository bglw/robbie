const ratings = {
	"beatles": 0,
	"arnold": 5,
	"muso": 1,
	"mexican food": 4,
	"javascript": 4,
	"typescript": 5,
	"php": 0
}

export const rate = (item) => {
	return ratings[item] || 2.5;
}