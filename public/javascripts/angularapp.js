angular.module('flapperNews',['ngRoute'])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: '/partials/home.html',
        controller: 'MainCtrl'
      }).
	  when('/post/:id', {
        templateUrl: '/partials/posts.html',
        controller: 'PostsCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }])
.factory('posts',['$http',function($http){
	var o={
		posts:[]
	}
	o.getAll=function(){
		return $http.get('/post').success(function(data){
			angular.copy(data,o.posts)
		})

	}
	o.create=function(obj){
		return $http.post('/post',obj).success(function(data){
		o.posts.push(data);
		})
	}
return o;
}])
.controller('MainCtrl',['$scope','posts',function($scope,posts){
	posts.getAll();
	
	$scope.posts=posts.posts;
	
	$scope.addPost=function(){
		if(!$scope.title||$scope.title===''){return;}
		posts.create({title:$scope.title,link:$scope.link,upvote:0});
		$scope.title='';
		$scope.link='';
	}
	$scope.increase=function(post){post.upvote+=1;}
}])
.controller('PostsCtrl',['$scope','posts','$routeParams',function($scope,posts,$routeParams){

$scope.post=posts.posts[$routeParams.id];
if($scope.body===''){return;}
$scope.addComment=function(){

}
}]);