exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    // I would prefer to use bluebird here but per the available dependencies
    // section of the readme looks like I only have access to jquery
    // I'm assuming this is because these tests are supposed to be run
    // in the front end
    var deferred = $.Deferred();
    setTimeout(function () {
      deferred.resolve(value);
    }, 50);
    return deferred.promise();
  },
  manipulateRemoteData: function(url) {
    // alternative is the longer $.ajax{{url: url, method: 'GET'}}
    return $.get(url)
    .then(function (data) {
      return data.people
      .map(function (person) {
        return person.name;
      })
      .sort();
    });
  }
};
