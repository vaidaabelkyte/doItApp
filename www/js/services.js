angular.module('starter.services', [])

.factory('Tasks', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tasks = [{
    id: 0,
    taskName: 'Go to shop',
    taskText: 'Walk'
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
