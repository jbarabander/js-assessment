exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    var promise = $.Deferred();
    // if the value is an instance of an error the promise should reject
    // and should pass the error value to the reject callbacks
    if (Object.prototype.toString.call(value) === '[object Error]') {
      promise.reject(value);
    } else {
      promise.resolve(value);
    }
    return promise;
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
