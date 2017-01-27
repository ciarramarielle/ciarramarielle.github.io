'use strict'
angular
	.module("app")
	.controller("ResumeCtrl", ResumeCtrl);

function ResumeCtrl($scope, dataService) {
	var vm = this;
	vm.resumeData = dataService.fakeResumeData();

	dataService.getAvengers()
        .then(function(data){
            // vm.avengers = data.data;
            // var json = JSON.parse(data.data);
            var json = data.data;
            vm.birds = json[0];
            // return vm.selectedAvengers;
            return json[0];
        });
}
