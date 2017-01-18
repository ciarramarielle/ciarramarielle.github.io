'use strict';
angular
    .module("app")
    .controller('OtherCtrl', OtherCtrl);


function OtherCtrl($scope) {
    var vm = this;
    vm.other_message = 'This is the other_message!';
    console.log("OtherCtrl getting invoked")
}
