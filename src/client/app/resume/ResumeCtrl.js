'use strict'
angular
	.module("app")
	.controller("ResumeCtrl", ResumeCtrl);

function ResumeCtrl($scope, dataService) {
	var vm = this;
	// vm.resumeText = "resumeText testing if model available";

	// Testing if I got the fakeResumeData
	vm.resumeData = dataService.fakeResumeData();
	console.log(vm.resumeData);
}
