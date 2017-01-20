'use strict'
angular
	.module("app")
	.controller("ResumeCtrl", ResumeCtrl);

function ResumeCtrl($scope, dataService) {
	var vm = this;
	vm.resumeData = dataService.fakeResumeData();
}
