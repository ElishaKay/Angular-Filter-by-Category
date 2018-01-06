var app = angular.module('appX', []);

app.controller('ctrlX', function($scope) {
  $scope.dataSet = [{
    firstname: 'first 1',
    lastname: 'last 1',
    age: '24',
    sex: 'F'
  }, {
    firstname: 'first 2',
    lastname: 'last 2',
    age: '21',
    sex: 'M'
  }, {
    firstname: 'first 3',
    lastname: 'last 3',
    age: '24',
    sex: 'M'
  }, {
    firstname: 'first 4',
    lastname: 'last 4',
    age: '26',
    sex: 'F'
  }];

  $scope.keyList = [];
  angular.forEach($scope.dataSet, function(val, key) {
    angular.forEach(val, function(v, k) {
      if ($scope.keyList.indexOf(k) < 0) {
        $scope.keyList.push(k);
      }
    })
  })
})

app.filter('mycustomSearch', function() {
  return function(input, option) {
    if (!option.type || !option.term) {
      return input;
    }
    var result = [];
    angular.forEach(input, function(val, key) {
      if (val[option.type].indexOf(option.term) > -1) {
        result.push(val);
      }
    })
    return result;
  }

});