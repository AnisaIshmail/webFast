function redirectUser(){
	var protocol = "http://"
	var url = $("#search-url").val();
	if(url == ""){
		alert("Please enter a URL");
	}else{
			window.location = "http://googleweblight.com/?lite_url=" + protocol + url;
	}
}

function webFast(){
	$("#go").click(function(){
		redirectUser();
	});
  	$("#search-url").on("keydown", function (e) {
		if (e.keyCode === 13) { //checks whether the pressed key is "Enter"
			redirectUser();
		}
    });
	
}

$(webFast);

