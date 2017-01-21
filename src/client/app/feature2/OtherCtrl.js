'use strict';
angular
    .module("app")
    .controller('OtherCtrl', OtherCtrl);


function OtherCtrl($scope, dataService, $window) {
    // $route.reload();

    var vm = this;

    // vm.quote =
    vm.listOfQuotes = [];
    for (var i=0; i < 3; ++i) {
        dataService.getQuote().then(
            // on success...
            function(data) {
                var adata = JSON.parse(data);
                // vm.quote= adata["content"];
                var quote= adata["content"];

                var windowWidth = angular.element(document.getElementById("otherJumbotron")).prop("offsetWidth")/3;
                var windowHeight = 200* (Math.random() + Math.ceil(i, 2));
                var imageSrc = dataService.getRandomImageSource(windowWidth, windowHeight);

                vm.listOfQuotes.push({"id": i, "q": quote, "imageSrc": imageSrc});
            }
        )



    }
    // var windowWidth = angular.element(document.getElementById("otherJumbotron")).prop("offsetWidth");
    // var windowHeight = angular.element(document.getElementById("otherJumbotron")).prop("clientHeight") * (Math.random() + 2);
    // vm.imageSrc = dataService.getRandomImageSource(100, 100);
}
