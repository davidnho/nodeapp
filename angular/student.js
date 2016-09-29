var mainApp = angular.module('mainApp',[]);
    
    mainApp.controller('studentController',function($scope){

        $scope.student = {
          firstName : "Noel",
          lastName : "David",
          fee : 1000,
          subjects:[
             {name:'PHP',marks:90},
             {name:'Python',marks:80},
             {name:'C#',marks:65},
             {name:'VB.NET',marks:75},
             {name:'Java',marks:67}
      ],
          fullName: function() {
              var studentObject;
              studentObject = $scope.student;
              return studentObject.firstName + " " + studentObject.lastName; 
          }
        };
}); 