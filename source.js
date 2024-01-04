javascript: (function() {
  var preferredInstance = "https://nitter.net";
  if (window.location.host.includes("twitter.com")) {
    if (window.location.pathname == "/i/flow/login") {
      if (window.location.search.includes("redirect_after_login")) {
        window.location.href = preferredInstance + (new URLSearchParams(window.location.search)).get("redirect_after_login")
      } else {
        alert("Error: URL query parameter \"redirect_after_login\" not found.")
      }
    } else {
      window.location.href = preferredInstance + window.location.pathname + window.location.search
    }
  } else if (window.location.host.includes("nitter") || window.location.host.startsWith("n.") || window.location.host.startsWith("nt.")) {
    window.location.href = "https://twitter.com" + window.location.pathname + window.location.search
  } else {
    alert("Error: Current URL is neither Twitter.com nor a recognized Nitter instance.")
  }
})();
