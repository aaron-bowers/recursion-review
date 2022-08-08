// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //if single value

  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (obj === null) {
    return 'null';
  }

  //if array
  if (Array.isArray(obj)) {

    if (obj.length === 0) {
      return '[]';
    }

    var jsonArray = '';
    jsonArray += '[';

    for (var i = 0; i < obj.length; i++) {
      jsonArray += stringifyJSON(obj[i]);

      if (i === obj.length - 1) {
        jsonArray += ']';
      } else {
        jsonArray += ',';
      }
    }
    return jsonArray;
  }

  //if obj
  if (typeof obj === 'object') {
    var results = [];

    if (!obj) {
      return '{}';
    }

    for (var keys in obj) {
      // debugger;
      if ((typeof keys !== 'function' && typeof obj[keys] !== 'function') && (obj[keys] && keys)) {
        results.push(stringifyJSON(keys) + ':' + stringifyJSON(obj[keys]));
      }
    }

    return '{' + results.join(',') + '}';

  }
};