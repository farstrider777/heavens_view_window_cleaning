function GreetController ($scope) {
   var container = document.getElementById('splash_container');
   var switch_background = document.getElementById('switch_background')
   console.log(switch_background)

   switch_background.addEventListener('click', flip);
   var counter = Math.floor(Math.random() * 5) + 1 ;
   console.log(counter)
   container.innerHTML = `<img src="../images/background${counter}.jpg">`
   function flip(event){
     counter++;
     if(counter > 4){
       counter = 1
     }
     container.innerHTML = `<img src="../images/background${counter}.jpg">`
     console.log("activate button")
   }
 }

GreetController.$inject = ['$scope'];

export default GreetController;
