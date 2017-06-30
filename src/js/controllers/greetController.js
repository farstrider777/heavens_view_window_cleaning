function GreetController ($scope) {


  var container = document.getElementById('splash_container');
  var counter = Math.floor(Math.random() * 5) + 1 ;
   console.log(counter)
   container.innerHTML = `<img src="../images/background${counter}.jpg">`
   function flip(){
     counter++;
     if(counter > 4){
       counter = 1
     }
     container.innerHTML = `<img src="../images/background${counter}.jpg">`
     console.log("activate button")
   }

   $scope.switch = function() {
     flip()
   }
 }

GreetController.$inject = ['$scope'];

export default GreetController;
