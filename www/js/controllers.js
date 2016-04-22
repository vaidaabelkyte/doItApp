angular.module('starter.controllers', [])

.controller('tasksCtrl', function($scope, Tasks) {
    $scope.tasks = Tasks.all;
    
})

.controller('addTaskCtrl', function($scope, Tasks) {
})
;
