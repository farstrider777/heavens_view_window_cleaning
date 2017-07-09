function Config ($stateProvider, $urlRouterProvider) {

  $stateProvider
     .state('home', {
       url: '/home',
       templateUrl: 'templates/home.tpl.html',
       controller: 'GreetController',
     })
    //  .state('page-not-found', {
    //    url: '/not-found',
    //    template: `<h2>page not found</h2>
    //    <a href="/#!">Click here to go home</a>`
    //  })
    //  .state('login', {
    //    url: '/login',
    //    templateUrl: 'templates/login.tmp.html',
    //    controller: 'Login'
    //  })
    //  .state('home', {
    //    url: '/home',
    //    templateUrl: 'templates/home.tmp.html',
    //    controller: 'Home'
    //  })
    //  .state('upload', {
    //    url: '/upload',
    //    templateUrl: 'templates/upload.tmp.html',
    //    controller: 'Upload'
    //  })
    //  .state('single', {
    //    url: '/single',
    //    templateUrl: 'templates/single.tmp.html',
    //    controller: 'Single'
    //  });

  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.otherwise('/home');
}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;
