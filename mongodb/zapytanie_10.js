db.people.updateMany(
	{job: {$eq: "Editor"}}
	,{$unset: {"email" : 1}}
)