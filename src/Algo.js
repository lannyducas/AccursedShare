var X = 10; //lifetime money to spend

var r = .02; // inflation factor

var b = .95; // impatience rate

var T = 2; //life expectancy

function utility_function(c) {
  if (c <= 0) {
    return -10000000;
  }
  console.log(12, Math.log(c))
  return Math.log(c);
  
}

function value_function(T, X, r, beta) {
  var utilities = [];
  var optimal_consumption = []
  var optimal_utilities
  console.log("first")
  if (T == 1) {
    console.log("final")
    optimal_consumption = [X];
    console.log("optimal_consumption", optimal_consumption)
    optimal_utilities = [utility_function(X)];
  }
  else {
    console.log("X", X)
    for (let i = 0; i < X; i++) {
      console.log(i)
      c = i;
      var tomorrow_consumption_stream = value_function(T - 1, Math.floor((1 + r) * (X - c)), r, beta)[0];
      var tomorrow_utility_stream = value_function(T - 1, Math.floor((1 + r) * (X - c)), r, beta)[1];
      var utility_today = utility_function(c) + beta * tomorrow_utility_stream[0];
      utilities.push(utility_today);
      console.log(utilities)
    }

    const max = Math.max(utilities);

    c = utilities.indexOf(max);
    tomorrow_consumption_stream = value_function(T - 1, Math.floor((1 + r) * (X - c)), r, beta)[0];
    tomorrow_utility_stream = value_function(T - 1, Math.floor((1 + r) * (X - c)), r, beta)[1];
    utility_today = utility_function(c) + beta * tomorrow_utility_stream[0];
    optimal_consumption = [c] + tomorrow_consumption_stream
    optimal_utilities = [utility_today] + tomorrow_utility_stream
  }
  return [optimal_consumption, optimal_utilities];

}