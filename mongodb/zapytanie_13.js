var mapFunction = function() {
	emit(this.job, 1);
};

var reduceFunction = function(key, values) {
  return key;
};

db.people.mapReduce(
	mapFunction,
	reduceFunction,
	{out: "zapytanie_13_results"}
);
