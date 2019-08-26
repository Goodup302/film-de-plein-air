$( document ).ready(function() {

	// Target map Url
	var mapUrl = $('#google_map_iframe').attr('src');
	$("#goto_embedmap").attr("href", mapUrl.replace('embed', ''));

	//Link smooth scroll
	$("a[href*='#']:not([href='#'])").click(function() {
		if (
			location.hostname == this.hostname
			&& this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
		) {
			var anchor = $(this.hash);
			anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
			if ( anchor.length ) {
				$("html, body").animate( { scrollTop: anchor.offset().top }, 900);
			}
		}
	});
});