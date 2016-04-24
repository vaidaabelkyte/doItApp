angular.module('starter.services', [])

.factory('Tasks', function() {
  // Might use a resource here that returns a JSON array

<<<<<<< HEAD
  
=======
  // Some fake testing data
<<<<<<< HEAD
>>>>>>> a55542d88117121a5f62e7e7f9d4cb6a1bc53a63
=======
>>>>>>> origin/master
 

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
