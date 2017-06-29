function GreetController ($scope) {
   var container = document.getElementById('splash_container');
   var switch_background = document.getElementById('switch_background')
   console.log(switch_background)
   container.innerHTML = `<img src="../images/background.jpg">`
   switch_background.addEventListener('click', flip);
   var counter = 0;
   function flip(event){
     counter++;
     if(counter > 11){
       counter = 1
     }
     container.innerHTML = `<img src="../images/background${counter}.jpg">`
     console.log("activate button")
   }
 }

GreetController.$inject = ['$scope'];

export default GreetController;
