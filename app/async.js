exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    var deferred = $.Deferred();
    // if the value is an instance of an error the promise should reject
    // and should pass the error value to the reject callbacks
    if (Object.prototype.toString.call(value) === '[object Error]') {
      setTimeout(function () {
        deferred.reject(value);
      }, 50);
    } else {
      setTimeout(function () {
        deferred.resolve(value);
      }, 50);
    }
    return deferred.promise();
  },

  manipulateRemoteData: function(url) {
    return $.ajax({
      url: url,
      method: 'GET'
    })
    .then(function (data) {
      return data.people.map(function (person) {
        return person.name;
      }).sort()
    });
  }
};
