$(document).ready(function(){
	$("#button a").click(linkClicked);
		function linkClicked(){
			event.preventDefault();
			console.log("linkClicked function running...");
		}

// I used "span" here to avoide the ".morecontents" starting in a new line. 
	$("span.moreContents").hide(); 
	$("p.readLess").hide();
	$("p.readMore").click(showMoreContents);
		function showMoreContents(){
			event.preventDefault();
			console.log("moreContents is showing...");
			$("span.moreContents").slideDown();
			$("p.readLess").show();
			$("p.readMore").hide();
		}

	$("p.readLess").click(showLessContents);
		function showLessContents(){
			event.preventDefault();
			console.log("lessContents is showing...");
			$("span.moreContents").slideUp();
			$("p.readLess").hide();
			$("p.readMore").show();
		}

	$("span#learnContents").hide();
	$("p#learnMore").click(showLearnContents);
		function showLearnContents(){
			event.preventDefault();
			console.log("learnMoreContents is showing...");
			$("span#learnContents").slideDown();
			$("p#learnMore").hide();
		}


});


