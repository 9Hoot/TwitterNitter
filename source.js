javascript: (function() {
	var preferredInstance = "https://nitter.poast.org";
	var host = window.location.hostname;
	var path = window.location.pathname;
	var search = window.location.search;
	if (host.includes("twitter.com") || host.includes("x.com")) {
		if (path == "/i/flow/login") {
			if (search.includes("redirect_after_login")) {
				window.location.href = preferredInstance + (new URLSearchParams(search)).get("redirect_after_login")
			} else {
				alert("Error: URL query parameter \"redirect_after_login\" not found.")
			}
		} else {
			window.location.href = preferredInstance + path + search
		}
	} else if (host.includes("nitter") || host.startsWith("n.") || host.startsWith("nt.")) {
		window.location.href = "https://x.com" + path + search
	} else {
		alert("Error: Current URL is neither Twitter.com, X.com, or a recognized Nitter instance.")
	}
})();
