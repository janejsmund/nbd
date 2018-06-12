var mapFunction = function() {
  emit(
  	this.nationality, 
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
  varBMI = 0.0;
  var result = {
    count: 0,
    minBMI: 1000.0,
    avgBMI: 0.0, 
    maxBMI: 0.0
  };
  for (var i = 0; i < values.length; i++) {
        
    if (parseFloat(values[i].height) !== null && parseFloat(values[i].height) >= 0) {
      h = parseFloat(values[i].height);
    } else {
      h = 170.0;
    }
    
    if (parseFloat(values[i].weight) !== null && parseFloat(values[i].weight) >= 0) {
      w = parseFloat(values[i].weight);
    } else {
      w = 60.0;
    }
    
    //1000 to convert height from [cm] to [m]
    BMI = parseFloat(w) * 10000 / (parseFloat(h) * parseFloat(h));

    result.count += values[i].count;
    if (result.minBMI > parseFloat(BMI)) { result.minBMI = parseFloat(BMI) };
    result.avgBMI += parseFloat(BMI);
    if (result.maxBMI < parseFloat(BMI)) { result.maxBMI = parseFloat(BMI) };
  }
  
  result.avgBMI = parseFloat(result.avgBMI) / parseInt(result.count);
  
  return result;
};

db.people.mapReduce(
	mapFunction,
	reduceFunction,
	{out: "zapytanie_14_results"}
);