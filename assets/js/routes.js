app.config(function($routeProvider) {
    $routeProvider
    .when("/",{
	templateUrl : "view/main.html",
        controller: 'myCtrl'
    })
   
    .when("/prodavnica",{
        templateUrl : "view/prodavnica.html",
            controller: 'myCtrl'
            })
            .when("/angular",{
                templateUrl : "view/angular.html",
                    controller: 'myCtrl'
                    })
             .when("/category/:id",{
                templateUrl : "view/category.html",
                    controller: 'myCtrl'
                        })
        .when("/dieta_online",{
             templateUrl : "view/online_nutricionist.html",
              controller: 'myCtrl'
                            })
        .when("/nutricionist",{
            templateUrl : "view/nutricionist.html",
            controller: 'myCtrl'
                        })
        .when("/date_picker",{
            templateUrl : "view/date_picker.html",
            controller: 'myCtrl'
                        })
        .when("/advice",{
            templateUrl : "view/advice.html",
            controller: 'myCtrl'
                        })
        .when("/article/:id",{
            templateUrl : "view/article.html",
            controller: 'myCtrl'
                        })
        .when("/recepti",{
            templateUrl : "view/recepti.html",
            controller: 'myCtrl'
                        })
       
    .otherwise("/",{
	templateUrl : "view/main.html",
        controller: 'myCtrl'
    })
    });