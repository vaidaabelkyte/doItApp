angular.module('starter.controllers', [])
//declaring the variables
.controller('tasksCtrl', function($scope) {
    var newTask = {
        newTaskName: "",
        newTaskText: ""
    };
   //default tasks 
  var tasks = [{
    id: 0,
    taskName: 'Go to Shop',
    taskText: 'Water, lemon'
  }, {
    id: 1,
    taskName: 'Clean Room',
    taskText: 'Clean windows'
  }, {
    id: 2,
    taskName: 'Buy clothes',
    taskText: 'River Island and Brown Thomas'
  }, {
    id: 3,
    taskName: 'Study',
    taskText: '5-8pm'
  }];
    //function for adding the task
    function addTask(){
        tasks.push({id: tasks.length+1, taskName: newTask.newTaskName, taskText: newTask.newTaskText});
        newTask.newTaskName = "";
        newTask.newTaskText = "";
    }
    //function to delete the task
    function deleteTask(task){
        tasks.splice(tasks.indexOf(task),1);
    }
    
    $scope.tasks = tasks;
    $scope.newTask = newTask;
    $scope.addTask = addTask;
    $scope.deleteTask = deleteTask;
})
;
