angular.module('starter.services', [])

.factory('Tasks', function() {
  // Might use a resource here that returns a JSON array

  
 

  return {
    all: tasks,
    remove: function(task) {
      tasks.splice(tasks.indexOf(chat), 1);
    },
    get: function(taskId) {
      for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === parseInt(taskId)) {
          return tasks[i];
        }
      }
      return null;
    }
  };
});
