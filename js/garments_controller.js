angular
  .module('HotDogStylusApp')
  .controller('GarmentsController', GarmentsController);

GarmentsController.$inject = ['$http'];

  function GarmentsController($http){
   var self = this;
   self.currentChoice = {};
   self.all = [];
   self.addGarment = addGarment;
   self.newGarment = {};
   self.showGarment = showGarment;
   // self.updateGarment = updateGarment;
   self.deleteGarment = deleteGarment;
   self.select = select;
   // self.sampleImage = 'http://i.imgur.com/FaL2NBA.jpg';

  function select(garment) {
    self.currentChoice = garment;
    console.log(self.currentChoice);
  }

  function getGarments() {
    $http
      .get(baseUrl + '/api/garments')
      .then(function(response) {
        console.log(response);
        self.all = response.data;
    });
  }

  getGarments();

  function showGarment() {
    $http
      .get(baseUrl + '/api/garments/' + garment._id)
      .then(function(response) {
        console.log(response);
        self.all = response.data;
    });
  }

  // function updateGarment() {
  //   $http
  //     .get(baseUrl + '/api/garments' + garment._id)
  //     .then(function(response) {
  //       console.log(response);
  //       self.all
  //     })
  // }

  function addGarment() {
    $http
      .post(baseUrl + '/api/garments', self.newGarment)
      .then(function(response) {
        console.log('add garment running');
        getGarments();
    });
  }

  // add code for update garment here

  function deleteGarment(garment) {
    $http
      .delete(baseUrl + '/api/garments/' + garment._id)
      .then(function(response) {
        console.log(response);
        var index = self.all.indexOf(garment);
        self.all.splice(index, 1);
    });
  }
}
