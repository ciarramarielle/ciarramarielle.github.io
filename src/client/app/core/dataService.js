(function(){
    'use strict';
    angular
        .module("app")
        .factory("dataService", dataService);

    // @ngInject ???
    function dataService($http) {

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
        return {
            getQuote: getQuote
        }
    }

        // function getQuote() {
        //     var api_url = "http://cors.io/?" + "https://api.github.com/users/angularjs";
        //     // "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
        //
        //     function quoteComplete(data, status, headers, config) {
        //         console.log(data);
        //         return data.data[0].data.results;
        //     }
        //
        //     return $http.get(api_url)
        //         .then(quoteComplete)
        //         .catch(function(message) {
        //             console.log("XHR failed for getQuote");
        //         });
        // }
        //
        // return {
        //     getQuote: getQuote
        // }
    // }


})();