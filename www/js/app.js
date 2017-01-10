angular.module('projetEnedisApp', ['ionic', 'enedisApp.controllers', 'enedisApp.service'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('login', {
         url: '/login',
         templateUrl: 'templates/login.html'
      })

      .state('app.accueil', {
        url: '/accueil',
        views: {
          'menuContent': {
            templateUrl: 'templates/accueil.html'
          }
        }
      })

      /*
      *GESTION DES PROFILS=====================================
      *MENU GESTION PROFIL=====================================
      */

      .state('app.addPtofileChoice', {
        url: '/addProfileChoice',
        views: {
          'menuContent': {
            templateUrl: 'templates/addProfileChoice.html'
          }
        }
      })


      /*
      *GESTION DES PROFILS=====================================
      *CREER NEW PROFIL========================================
      */

      .state('app.addPtofileNew', {
        url: '/profile/addProfileNew',
        views: {
          'menuContent': {
            templateUrl: 'templates/addProfileNew.html'
          }
        }
      })

      .state('app.addProfileNewValidation', {
        url: '/profile/addProfileNewValidation',
        views: {
          'menuContent': {
            templateUrl: 'templates/addProfileNewValidation.html'
          }
        }
      })

      .state('app.addProfil', {
        url: '/profil/addProfil',
        views: {
          'menuContent': {
            templateUrl: 'templates/addProfil.html'
          }
        }
      })

      /*
      *GESTION DES PROFILS====================================
      *IMPORTATION PROFIL=====================================
      */

      .state('app.importProfil', {
        url: '/profil/importProfil',
        views: {
          'menuContent': {
            templateUrl: 'templates/importProfil.html'
          }
        }
      })

      .state('app.importProfilValidation', {
        url: '/profil/importProfil/importProfilValidation',
        views: {
          'menuContent': {
            templateUrl: 'templates/importProfilValidation.html'
          }
        }
      })

      /*
      *GESTION DES PROFILS===================================
      *MODIFICATION PROFIL===================================
      */

      .state('app.chooseProfil', {
        url: '/profil/chooseProfil',
        views: {
          'menuContent': {
            templateUrl: 'templates/chooseProfil.html',
          }
        }
      })

      .state('app.editProfil', {
        url: '/profil/editProfil',
        views: {
          'menuContent': {
            templateUrl: 'templates/editProfil.html'
          }
        }
      })

      .state('app.editProfilValidation', {
        url: '/profil/editProfil/editProfilValidation',
        views: {
          'menuContent': {
            templateUrl: 'templates/editProfilValidation.html'
          }
        }
      })

      /*
      *ATTRIBUTION DE PARCOURS OU MODULES====================
      *SELECTIONNER PROFILS==================================
      */

      .state('app.addWorkProfil', {
        url: '/addWorkProfil',
        views: {
          'menuContent': {
            templateUrl: 'templates/addWorkProfil.html',
            controller: 'listProfilCtrl'
          }
        }
      })

      /*
      *ATTRIBUTION DE PARCOURS OU MODULES====================
      *SELECTIONNER MODULES OU PARCOURS======================
      */

      .state('app.addWorkModule', {
        url: '/addWorkModule',
        views: {
          'menuContent': {
            templateUrl: 'templates/addWorkModule.html',
            controller: 'listModuleCtrl'
          }
        }
      })

      .state('app.addWorkParcours', {
        url: '/addWorkParcours',
        views: {
          'menuContent': {
            templateUrl: 'templates/addWorkParcours.html',
            controller: 'listParcoursCtrl'
          }
        }
      })

      .state('app.addWorkValidation', {
        url: '/addWorkValidation',
        views: {
          'menuContent': {
            templateUrl: 'templates/addWorkValidation.html'
          }
        }
      })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
