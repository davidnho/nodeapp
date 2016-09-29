mainApp.controller("programmerController", function($scope) {
   $scope.programmer = {
      firstName: "Noel",
      lastName: "David",
      fees:500,
      
      languages:[
         {name:'PHP',marks:90},
         {name:'Python',marks:80},
         {name:'C#',marks:65},
         {name:'VB.NET',marks:75},
         {name:'Java',marks:67}
      ],
      
      fullName: function() {
         var programmerObject;
         programmerObject = $scope.programmer;
         return programmerObject.firstName + " " + programmerObject.lastName;
      }
   };
});