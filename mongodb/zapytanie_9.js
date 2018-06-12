db.people.updateMany(
	{first_name: {$eq: "Antonio"}}
	,{$set: {"hobby" : "ping-pong"}}
)