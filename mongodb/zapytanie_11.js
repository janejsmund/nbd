var mapFunction = function() {
  emit(
  	this.sex, 
  	{
  	  count: 1, 
  	  height: [parseFloat(this.height)],
  	  weight: [parseFloat(this.weight)]
  	}
  );
};

var reduceFunction = function(key, values) {
  var h = 0.0;
  var w = 0.0;
  var result = {
    count: 0, 
    avgHeight: 0.0, 
    avgWeight: 0.0
  };
  for (var i = 0; i < values.length; i++) {
        
    if (parseFloat(values[i].height) !== null && parseFloat(values[i].height) >= 0) {
      h = values[i].height;
    } else {
      h = 0.0;
    }
    
    if (parseFloat(values[i].weight) !== null && parseFloat(values[i].weight) >= 0) {
      w = values[i].weight;
    } else {
      w = 0.0;
    }

    result.count += values[i].count;
    result.avgHeight += parseFloat(h);
    result.avgWeight += parseFloat(w) * 100;
  }
  
  result.avgHeight = result.avgHeight / result.count;
  result.avgWeight = result.avgWeight / result.count;

  return result;
};

db.people.mapReduce(
	mapFunction,
	reduceFunction,
	{out: "zapytanie_11_results"}
);