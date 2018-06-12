db.people.find(
	{$and:[
	  {sex:"Male"},
	  {nationality:"Germany"}
	]}
)