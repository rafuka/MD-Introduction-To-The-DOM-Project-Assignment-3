(function(window) {
  var utilities = {};
  
  utilities.isArray = Array.isArray || function(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
  };
  
  utilities.by = function(list, n, callback) {
    if (list === null) throw "Error in function 'by': 'list' parameter is null.";
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
    if (! obj) throw "Error in function 'keys': invalid 'obj' parameter."
    
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
    if (! obj) throw "Error in function 'values': invalid 'obj' parameter."
    
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
    if (! obj) throw "Error in function 'pairs': invalid 'obj' parameter."
    
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

  utilities.pluralize = function(n, word, pluralWord) {
    if (!word) throw "Error in function 'pluralize': 'word' parameter not provided."
    
    if (n === 1) return word;
    if (!pluralWord) return word+"s";
    return pluralWord;
  };

  utilities.toDash = function(str) {
    if (typeof str !== 'string') throw "Error in function 'toDash': 'str' parameter not a string."
    
    var result = "";
    
    for (var i = 0; i < str.length; i++) {
      // Check if character is capitalized
      if (str[i] >= 'A' && str[i] <= 'Z') {
        // add dash before next character
        result += "-";
        // add lowercase character
        result += (str.charAt(i)).toLowerCase();
      }
      else result += str[i];
    }
    
    return result;
  };

  utilities.toCamel = function(str) {
    if (typeof str !== 'string') throw "Error in function 'toCamel': 'str' parameter not a string."
  
    // initialize result string
    var result = "";
    // boolean variable used to define when a character must be capitalized
    var camel = false;
    
    // loop through the string
    for (var i = 0; i < str.length; i++) {
      // if a dash has been found, set 'camel' var to true
      if (str[i] === "-") {
        camel = true
      }
      else {
        // if camel var is true, add the current char in uppercase and set camel to false
        if (camel) {
          result += str[i].toUpperCase();
          camel = false;
        }
        else {
          // add current character to result string
          result += str[i];
        }
      }
    }
    
    return result;
  };
  
  utilities.has = function(obj, search) {
    if (! obj) throw "Error in function 'has': invalid 'obj' parameter.";
    if (search !== "" && !search) throw "Error in function 'has': 'search' parameter missing.";
    
    // loop through the object 
    for (var key in obj) {
      // compare object[key] value with search value. Return true if equal
      if (obj[key] === search) return true;
    }
    
    return false;
  };

  utilities.pick = function(obj, keys) {
    if (! obj) throw "Error in function 'pick': invalid 'obj' parameter.";
    if (! utilities.isArray(keys)) throw "Error in function 'pick': 'keys' parameter is not an array."
    
    // object used to store the results
    var result = {};
    
    // loop through object properties
    for (var key in obj) {
      // loop through keys array
      for (var i = 0; i < keys.length; i++) {
        // compare the current object key with the current key of the array. If equal, add to the result object
        if (key === keys[i]) result[key] = obj[key];
      }
    }
    
    return result;
  };
  
})(window)
