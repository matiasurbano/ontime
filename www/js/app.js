// Ionic app App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'app' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'app.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers'])

.run(function ($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });


    $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
      console.log('$stateChangeStart');
    });
  
    $rootScope.$on('$stateChangeSuccess', function (e, toState, toParams, fromState, fromParams) {
      console.log('stateChangeSuccess');
    });
  
  
    $rootScope.$on('$stateChangeError', function (e, toState, toParams, fromState, fromParams) {
      console.log('$stateChangeError');
    });
  
  
  
  
})




.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
    .state('app.projects', {
      url: "/projects",
      views: {
        'menuContent': {
          templateUrl: "templates/projects.html",
          controller: 'ProjectsCtrl'
        }
      }
    })
    .state('app.project', {
      url: '/project/:id',
      templateUrl: 'templates/project.html',
      controller: 'AppCtrl',
      onEnter: function () {
          console.log('onENTER:  Hello There');
      }
    })


  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/projects');
});