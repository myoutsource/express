
var qz=angular.module('quiz',['ngSanitize']);

qz.controller('MainCtrl',['$scope','$http','$window','$timeout',function($scope,$http,$window,$timeout){

$http.get('/knowhow/stubs/adviews.json').success(function(data){$scope.adviews=data});
$scope.button={};
$scope.button.text="Send Answers"
$scope.button.caption="On clicking above button opens a default MAIL PROGRAM with the TO ,SUBJECT and TEXT field already filled out, click the SEND button on the MAIL Program to submit answers ";
$http.get('/knowhow/stubs/html_basics_1.json').success(function(data){$scope.cont=data})
$scope.dead = 0;
$scope.feedback=function(){ $timeout(function() {$window.location.href='mailto:sathya_sudhakar@infosys.com?subject=Share%20your%20valuable%20Feedback '})}
$scope.createQuiz=function(){ $timeout(function() {$window.location.href='mailto:sathya_sudhakar@infosys.com?subject=Quiz%20Questions&body=Share%20your%20questions%20and%20answers,%20click%20the%20send%20button%20on%20the%20screen.'})}
$scope.die = function(){ $scope.dead++; stp = $timeout($scope.die,1000);}
var str = $scope.die();
$scope.repair=function(){$timeout(function() {
$scope.button.text="Please Wait....";
$scope.button.caption= "Winners will be notified by Email";
var y;
$http.get('/knowhow/stubs/m0529gl.json').success(function(data){
var c=0,cd=new Date();
var y=data;
var x=$scope.cont.quiz;
var d=$scope.dead;
var p=$scope.cont.phone;
var n=$scope.cont.operator;

for(var i=0;i<x.length;i++)
c=(x[i].ans && x[i].ans==y[i])?c+1:c;

$window.location.href='mailto:sathya_sudhakar@infosys.com?subject=Quiz%20Answers&body=Serial No:QU1ZD'+cd.getDate()+'T'+d.toString()+'CRCK'+c+'M'+(cd.getMonth()+1)+'%0A'+'Mobile No :'+p.toString()+'%0A'+'Network :'+n.toString()+'%0A'+''+'%0A'+'Click%20send%20button%20on%20the%20screen.';
});
});
}


}]);


