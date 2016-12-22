function webFast(){
	$("#go").click(function(){
		var protocol = "http://"
		var url = $("#search-url").val();
		window.location = "http://googleweblight.com/?lite_url=" + protocol + url;
	});
}

$(webFast);
