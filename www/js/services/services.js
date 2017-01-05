angular.module('enedisApp.service', [])


  .factory('profilService', ['$http', function($http){

    return{
      listProfil: function(){
        return $http.get("data/agents.json")
      }
    }
  }])

  .factory('moduleService', ['$http', function($http){

    return{
      listModule: function(){
        return $http.get("data/modules.json")
      }
    }
  }])

  .factory('parcoursService', ['$http', function($http){

    return{
      listParcours: function(){
        return $http.get("data/parcours.json")
      }
    };
  }]);
