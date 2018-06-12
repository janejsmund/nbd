db.people.updateMany(
	{"location.city": {$eq: "Moscow"}}
	,{ $set : {"location.city": "Moskwa"}}
)