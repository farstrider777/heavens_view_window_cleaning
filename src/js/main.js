import angular from 'angular';
import 'angular-ui-router';
import 'angular-sanitize';
import Config from './config.js';
import HomeController from './controllers/home.js';
import LikeCounter from './controllers/counter.js';
import GreetController from './controllers/greetController';


angular
  .module('app', ['ui.router'])
  .config(Config)
  .controller('HomeController', HomeController)
  .controller('LikeCounter', LikeCounter)
  .controller('GreetController', GreetController)
