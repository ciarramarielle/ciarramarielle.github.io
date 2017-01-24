(function(){
    'use strict';
    angular
        .module("app")
        .factory("dataService", dataService)
        .config(['$httpProvider', function($httpProvider) {
            delete $httpProvider.defaults.headers.common["X-Requested-With"]
        }]);

    // @ngInject ???
    function dataService($http) {

        // Get random quote from free QuotesOnDesign API
        function getQuote() {

            // var url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";//&_jsonp=mycallback";
            var url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=";

            return $http.get(url)
                .then(getQuoteComplete, getQuoteFail);

            function getQuoteComplete(data) { //}, status, headers, config, response) {
                // This string manipulation on data.data removes the /**/myCallbackFn( ... )
                //  from the jsonp. This is to bypass CORS issue. Only works for DEV.
                return (data.data).slice(6, (data.data).length-2);
            }

            function getQuoteFail(message) {
                    console.log("XHR failed for getQuote ");
                    return "Quote was not found but imagine this text is SO inspirational...";
            }

        }

        // Get random image from free Unsplash.it API
        function getRandomImageSource(imgWidth, imgHeight) {
            // Assumes stable API... no error checking right now
            return "https://unsplash.it/"+imgWidth+"/"+imgHeight+"/?random";
	}

	function fakeResumeData() {
        return {
            basic: {
                name: "My Name",
                phone: "123-456-7890",
                location: "City, CA"
			},
			education: {
				school: "University of Hello Hi",
				degree: "Bachelor of Science in Computer Science",
				graduation: "Abcd 2099"
			},
            work: {
                job1: {
                    employer: "Employer"
                },
                job2: {
                    employer: "Employer 2"
                }
            }
		}
	}
        return {
            getQuote: getQuote,
            getRandomImageSource: getRandomImageSource,
            fakeResumeData: fakeResumeData
        }
    }
})();
