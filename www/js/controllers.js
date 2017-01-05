angular.module('enedisApp.controllers',  ['ionic'])
  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };
  })




  .controller('addProfileNewFormCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.prenom = '';
    $scope.nom = '';
    $scope.birth='';
    $scope.genre = '';
    $scope.college = '';
    $scope.nni = '';
    $scope.statut = '';
    $scope.ancien='';
    $scope.ancienieg='';
    $scope.niveau='';
    $scope.email='';


    $scope.go = function ( path ) {
      $location.path( path );
    };

    $scope.reset = function(){
      $scope.prenom = '';
      $scope.nom = '';
      $scope.birth='';
      $scope.genre = '';
      $scope.college = '';
      $scope.nni = '';
      $scope.statut = '';
      $scope.ancien='';
      $scope.ancienieg='';
      $scope.niveau='';
      $scope.email='';
    };
  }])

  .controller('listProfilCtrl', ['$scope', 'profilService', function($scope, profilService){

    profilService.listProfil().then(function(response){
      $scope.profils=response.data;

    $scope.selectedProfils= [];

    $scope.addProfil = function(profil) {
      $scope.selectedProfils.push(profil);
      $scope.name = data.nom;
    }
    })
  }])

  .controller('listParcoursCtrl', ['$scope', 'parcoursService', function($scope, parcoursService){
    parcoursService.listParcours().then(function(response){
      $scope.parcours=response.data;
      console.log($scope);

    })
  }])

.controller('listModuleCtrl', ['$scope', 'moduleService', function($scope, moduleService){
  moduleService.listModule().then(function(response){
    $scope.modules=response.data;
    console.log($scope);
  })
}]);

