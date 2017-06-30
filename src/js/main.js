import angular from 'angular';
import 'angular-ui-router';
import LikeCounter from './controllers/counter';
import GreetController from './controllers/greetController';


angular
  .module('app', [])
  .controller('LikeCounter', LikeCounter)
  .controller('GreetController', GreetController)
