(function(){
  'use strict';
  var todo={};
  var module = angular.module('app', ['onsen']);

  module.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      setTimeout(function() {
        alert(''+device.uuid);
      }, 100);
    };
  });

  module.controller('DetailController', function($scope, $data) 
  {
    $scope.item = $data.selectedItem;
  });

  module.controller('MasterController', function($scope, $data, $http) {
    $scope.items = todo;  
    $http.get('http://www.empowerlabs.com/intellibanks/data/Sandbox/Araceli/getUserData.php').
  success(function(data, status, headers, config) {
  	data.reverse();
    $data.items=data;
    todo=data;
    $scope.items = $data.items;  
    $scope.showDetail = function(item) {
      var selectedItem = item;
      $data.selectedItem = selectedItem;
      $scope.ons.navigator.pushPage('', {title : selectedItem.title});
    };
  }).
  error(function(data, status, headers, config) {
  	
  });
  });

  module.factory('$data', function() {
      var data = {};
      
      data.items = todo;
      
      return data;
  });
})();
