
// this one does the work
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		let nurl = details.url.replace("shorts/", "watch?v=");
		
		// it would be far nicer for the user if this did not make youtube load
		// two different pages.
		// just one simple mim string replace on the url. (save time AND data)
		
		// slow and allows the 'shorts/' page to load.
		// also, sometimes the action is uncaught. (wonderful)
		// we would rather block and set another redirect instead.
		chrome.tabs.update(details.tabID, {url: nurl}); 
		
		// modifying the current request does not work on my chrome browser.
		// instead we cancel the current request. (and above we set the new 'redir')
		// return { redirectUrl : nurl };
	}, 
	{urls: ["*://www.youtube.com/shorts/*"]}
	);
	
const filter = {
  url: [
    {
      urlMatches: 'https://www.youtube.com/shorts/*',
    },
  ],
};

// this makes it so that the script does not get inactive forever
// and it also runs on preloaded pages
chrome.webNavigation.onCompleted.addListener((details)=>{
	let nurl = details.url.replace("shorts/", "watch?v=");
	chrome.tabs.update(details.tabID, {url:nurl});
}, filter);
