function GreetController ($scope) {

  var counter = Math.floor(Math.random() * 3) + 1 ;

   $scope.place = `../images/background${counter}.jpg`

   $scope.switch = function() {
     counter++;
     if(counter > 3){
       counter = 1
     }
     $scope.place = `../images/background${counter}.jpg`
   }
 }

GreetController.$inject = ['$scope'];

export default GreetController;
