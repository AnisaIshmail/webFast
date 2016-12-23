function webFast(){
	$("#go").click(function(){
		var protocol = "http://"
		var url = $("#search-url").val();
		window.location = "http://googleweblight.com/?lite_url=" + protocol + url;
	});
  	$("#search-url").on("keydown", function (e) {
		if (e.keyCode === 13) { //checks whether the pressed key is "Enter"
		var protocol = "http://"
		var url = $("#search-url").val();
		window.location = "http://googleweblight.com/?lite_url=" + protocol + url;
		}
    });
	
}

$(webFast);

