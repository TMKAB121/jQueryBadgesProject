$(function() {
  $.ajax('https://www.codeschool.com/users/tsayge.json', {
	  dataType: 'jsonp',
	  success: function(response){
		  var completed_courses = response.courses.completed;
		  var length = completed_courses.length;
		  var build_string;
		  for(var i=0; i < length; i++){
			  build_string += '<div class="course">';
			  build_string += '<h3>' + completed_courses[i]['title'] + '</h3>';
			  build_string += '<img alt="" src="' + completed_courses[i]['badge'] + '"/>';
			  build_string += '<a href="' + completed_courses[i]['url'] + '" target="_blank" class="btn btn-primary">See Course</a>';
			  build_string += '</div>';
		  };
		  $('#badges').append(build_string);
	  }
  });
});
