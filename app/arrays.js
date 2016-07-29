exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function (prev, curr) {
      if (typeof curr === 'number') {
        prev += curr;
      }
      return prev;
    }, 0);
  },

  remove: function(arr, item) {
    return arr.filter(function (element) {
      return element !== item;
    })
  },

  removeWithoutCopy: function(arr, item) {
    var index = arr.indexOf(item);
    while (index !== -1) {
      arr.splice(index, 1);
      index = arr.indexOf(item);
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.reduce(function (prev, curr) {
      if (curr === item) {
        prev++;
      }
      return prev;
    }, 0);
  },

  duplicates: function(arr) {

  },

  square: function(arr) {
    return arr.map(function (element) {
      if (typeof element === 'number') {
        return element * element;
      } else {
        return element;
      }
    });
  },

  findAllOccurrences: function(arr, target) {
    var indexArr = [];
    arr.forEach(function (element, index) {
      if (element === target) {
        indexArr.push(index);
      }
    })
    return indexArr;
  }
};
