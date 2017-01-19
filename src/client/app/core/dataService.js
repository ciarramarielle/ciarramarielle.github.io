(function(){
    'use strict';
    angular
        .module("app")
        .factory("dataService", dataService);

    // @ngInject ???
    function dataService($http) {

        // Get random quote from free QuotesOnDesign API
        function getQuote() {

            var url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
            // 'https://api.github.com/users/angularjs'
            return $http.get(url)
                .then(getQuoteComplete, getQuoteFail);

            function getQuoteComplete(data, status, headers, config) {
                return data.data;
            }

            function getQuoteFail(message) {
                    console.log("XHR failed for getQuote");
            }
        }

        // Get random image from free Unsplash.it API
        function getRandomImageSource(imgWidth, imgHeight) {
            // Assumes stable API... no error checking right now
            return "https://unsplash.it/"+imgWidth+"/"+imgHeight+"/?random";

        }
        return {
            getQuote: getQuote,
            getRandomImageSource: getRandomImageSource
        }
    }
})();