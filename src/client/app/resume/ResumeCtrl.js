'use strict'
angular
	.module("app")
	.controller("ResumeCtrl", ResumeCtrl);

function ResumeCtrl($scope, dataService) {
	var vm = this;
	vm.resumeData = dataService.fakeResumeData();

	vm.birds = dataService.getAvengers()
            .then(function(data){
                // vm.avengers = data.data;
                console.log(data.data);
                // return vm.selectedAvengers;
                return data.data;
            });

}
