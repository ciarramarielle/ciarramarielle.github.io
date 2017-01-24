'use strict';

angular
    .module('app', ['ngRoute', 'ngSanitize'])
    .config(function ($routeProvider, $locationProvider) {
        // This is routing WITHIN ng-view only.
        //      Paths are relative to <views> (config in express.js)
        //      Right now, <views> = mean_start/src/client/
        $locationProvider.html5Mode(true);
        $routeProvider
            .when("/", {
                templateUrl: "app/home/home.html"
            })
            .when("/random/", {
                templateUrl: "app/randomQuoteImage/randomQuoteImage.html",
                controller: "RandomQuoteImageCtrl",
                controllerAs: "RQI"
            })
	    .when("/resume/", {
	    	templateUrl: "app/resume/resume.html"
	    })
    });
