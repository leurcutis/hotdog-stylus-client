// states
angular.module('HotDogStylusApp')
  .config(ClientRouter);

function ClientRouter($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html',
      controller: 'UsersController as users'
    })
    .state('outfitBuilder', {
      url: '/outfit_builder',
      templateUrl: 'partials/outfitBuilder.html',
      controller: 'OutfitController as outfits'
    })
    .state('closet', {
      url: '/closet',
      templateUrl: 'partials/closet.html',
      controller: 'GarmentsController as garments'
    });
}
