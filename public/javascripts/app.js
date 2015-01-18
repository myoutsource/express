angular.module('flapperNews',['ui.router'])
..config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('home');
}])
.factory('posts',[function(){
var o={
posts:[]
}
return o;
}])
.controller('MainCtrl',['$scope','posts',function($scope,posts){
$scope.posts=posts.posts;
$scope.addPost=function(){
if(!$scope.title||$scope.title===''){return;}
$scope.posts.push({title:$scope.title,link:$scope.link,upvote:0});
$scope.title='';
$scope.link='';
console.log(posts.posts);
}
$scope.increase=function(post){post.upvote+=1;}
}])