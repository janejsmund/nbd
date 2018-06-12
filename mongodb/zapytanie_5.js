db.people.find(
	{birth_date: {$gt: "2000-01-01T00:00:01Z"}}
	,{ first_name: 1, last_name: 1, "location.city": 1, _id: 0}
)