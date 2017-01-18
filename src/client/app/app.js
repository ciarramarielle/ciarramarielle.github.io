'use strict';

angular
    .module('app', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        // This is routing WITHIN ng-view only.
        //      Paths are relative to <views> (config in express.js)
        //      Right now, <views> = mean_start/src/client/
        $locationProvider.html5Mode(true);
        $routeProvider
            .when("/", {
                templateUrl: "app/feature1/hello.html"
            })
            .when("/other/", {
                templateUrl: "app/feature2/other.html",
                controller: "OtherCtrl"
            });
    });