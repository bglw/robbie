ratings = {
	"beatles": 0,
	"arnold": 5,
	"muso": 1,
	"mexican food": 4,
	"frozen burritos": 3,
	"multiple screens": 1,
	"javascript": 4,
	"typescript": 5,
	"webpack": 5,
	"php": 0,
	"vscode": 5,
	"react": 5,
	"gatsby": 5,
	"king hapi": 5,
	"big iron": 5,
	"dj cenacity": 5,
	"country music": 0
}

export rate = ->(item) { ratings[item] || 2.5 }

export run = ->(fn) { 
	for i in 0..10000 do
	  fn()
	end 
}