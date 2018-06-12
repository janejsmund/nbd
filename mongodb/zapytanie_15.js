var mapFunction = function() {
  if (this.nationality == "Poland" && this.sex == "Female") { 
	  for (var i = 0; i < this.credit.length; i++) {
		emit(this.credit[i].currency, parseFloat(this.credit[i].balance));
	  }
  }
};

var reduceFunction = function(key, values) {
  var count = 0;
  var result = {
    sum: 0.0,
    avg: 0.0
  }
  for (var i = 0; i < values.length; i++) {
	count += 1;
	result.sum += parseFloat(values[i]);
  }
  result.avg = result.sum / count;
  return result;
};

db.people.mapReduce(
	mapFunction,
	reduceFunction,
	{out: "zapytanie_15_results"}
);
