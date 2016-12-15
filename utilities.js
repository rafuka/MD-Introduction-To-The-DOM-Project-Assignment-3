(function(window) {
  var utilities = {};
  
  utilities.isArray = Array.isArray || function(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
  };
  
  utilities.by = function(list, n, callback) {
    if (list === null) throw "Error on function 'by': 'list' parameter is null.";
    if (! utilities.isArray(list) && typeof list !== 'object') throw "Error on function 'by': 'list' parameter is not an array or object.";
    if (n === 0) throw "Error on function 'by': 'n' parameter can't be zero.";
    
    // check if list is an array
    if (utilities.isArray(list)) {
      // Traverse the list, incrementing the index by n each time.
      for (var i = 0; i < list.length; i += n) {
        // apply callback on list element and store it back on list
        list[i] = callback(list[i]);
      }
    }
    else {
      // initialize variable that keeps the count of iterations
      var count = 0;
      
      // loop through object
      for (var key in list) {
        
        //check if the key is in position a*n
        if (count % n === 0) {
          // apply callback on list element and store it back on list
          list[key] = callback(list[key]);
        }
        // increment count by 1
        count++;
      }
    }
  };

  utilities.keys = function(obj) {
    if (! obj) throw "Error on function 'keys': invalid 'obj' parameter."
    
    // Initialize array that will contain key names
    var arr = [];
    
    // loop through the object keys, storing each one in the array
    for (var key in obj) {
      // add key to the array
      arr.push(key);
    }
    
    return arr;
  };

  utilities.values = function(obj) {
    if (! obj) throw "Error on function 'values': invalid 'obj' parameter."
    
    // Initialize array that will contain the object values
    var arr = [];
    
    // loop through the object keys, storing each value in the array
    for (var key in obj) {
      // add value to the array
      arr.push(obj[key]);
    }
    
    return arr;
  };

  utilities.pairs = function(obj) {
    if (! obj) throw "Error on function 'pairs': invalid 'obj' parameter."
    
    // Initialize array that will contain pairs
    var arr = [];
    
    // loops through object, storing each key and value in the array
    for (var key in obj) {
      // add key and value to the array
      arr.push(key);
      arr.push(obj[key]);
    }
    
    return arr;
  };

  utilities.shuffle = function(arr) {
    if(! utilities.isArray(arr)) throw "Error in function 'shuffle': 'arr' parameter is not an array.";
    
    // store the number of elements in a variable
    var num = arr.length;
    
    // Loop through the array
    for (var i = 0; i < num; i++) {
      // create variable to hold the value on the current item
      var temp = arr[i];
      // calculate random index
      var randIndex = Math.floor(Math.random() * num);
      // swap value on current index with value on random index
      arr[i] = arr[randIndex];
      arr[randIndex] = temp;
    }
  };
  
})(window)
