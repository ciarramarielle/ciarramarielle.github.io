'use strict';
angular
    .module("app")
    .controller('OtherCtrl', OtherCtrl);


function OtherCtrl($scope, dataService) {
    // $route.reload();

    var vm = this;
    vm.other_message = 'This is the other_message!';

    var quote = dataService.getQuote();
    quote.then(function(data) {
        vm.quote= data[0]["content"];
    });

    // var windowWidth = $(window).width();
    var windowWidth = angular.element(document.getElementById("otherJumbotron")).offsetWidth;
    vm.imageSrc = dataService.getRandomImageSource(windowWidth, 300);
}
