angular
  .module('HotDogStylusApp', [])
  .directive('navbar', navBar)
  .directive('garmentUpload', garmentUpload);

console.log('app.js loaded');


// makes it available on every page if want

function navBar() {
  var directive = {
    restrict: 'E',
    templateUrl: '/partials/navBar.html',
    transclude: true
  };
  return directive;
}

function garmentUpload () {
  var directive = {
    restrict: 'E',
    templateUrl: '/partials/garment_upload'
  };
  return directive;
}
