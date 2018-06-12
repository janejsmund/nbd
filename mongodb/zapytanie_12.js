var mapFunction = function() {
  for (var i = 0; i < this.credit.length; i++) {
	emit(this.credit[i].currency, parseFloat(this.credit[i].balance));
  }
};

var reduceFunction = function(key, values) {
  var result = 0;
  for (var i = 0; i < values.length; i++) {
    result += values[i];
  }
  return result;
};

db.people.mapReduce(
	mapFunction,
	reduceFunction,
	{out: "zapytanie_12_results"}
);
