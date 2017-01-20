'use strict';
angular
    .module("app")
    .controller('OtherCtrl', OtherCtrl);


function OtherCtrl($scope, dataService) {
    // $route.reload();

    var vm = this;

    var quote = dataService.getQuote();
    quote.then(function(data) {
        vm.quote= data[0]["content"];
    });

    var windowWidth = angular.element(document.getElementById("otherJumbotron")).prop("offsetWidth");
    var windowHeight = angular.element(document.getElementById("otherJumbotron")).prop("clientHeight") * (Math.random() + 2);
    vm.imageSrc = dataService.getRandomImageSource(windowWidth, windowHeight);
    // console.log(windowHeight, windowWidth);
}
