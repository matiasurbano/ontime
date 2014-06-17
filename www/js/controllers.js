angular.module('app.controllers', [])

.controller('AppCtrl', function($scope) {
    console.log('*************************************************');

})

.controller('ProjectsCtrl', function($scope) {
  $scope.projects = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('ProjectCtrl', function ($scope, $stateParams) {
    console.log('ProjectCtrl --');
    $scope.project.id = $stateParams.id;
  
//    EmployeeService.findById($stateParams.id).then(function(employee) {
//        $scope.employee = employee;
//    });
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

            
            