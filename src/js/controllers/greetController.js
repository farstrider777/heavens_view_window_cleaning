function GreetController ($scope, $window) {
  $scope.place = `../images/background2.jpg`;
////////////previous code block for randomizing splash image//////////////
  //var counter = Math.floor(Math.random() * 3) + 1 ;

  //  $scope.place = `../images/background${counter}.jpg`
  //  $scope.switch = function() {
  //    counter++;
  //    if(counter > 3){
  //      counter = 1
  //    }
  //    $scope.place = `../images/background${counter}.jpg`
  //    $window.location.reload();
  //  }
 }

GreetController.$inject = ['$scope', '$window'];

export default GreetController;
