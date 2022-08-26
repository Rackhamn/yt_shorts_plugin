# Youtube Shorts as Video
Chromium plugin to watch Youtube shorts as regular Youtube videos.

It (should) intercept all Youtube traffic that tries to play shorts and redirect you to a standard Youtube video format version of that short.

Originally it was planned to use Chrome's Manifest V3 (Json) and maybe some JS.  
Turns out that this redirect action is actually a huge possible interception flaw. 

But (lucky for me) using the previus version, Manifest V2 (Json), proved enough to make it work.  

# Issue:
The plugin unfortunately needs to perform a redirect and block the previus request at the same time.  
Sometimes this works well, sometimes it loads two pages. One for the short and then one for the video.

It is also unfortunate that the Youtube player for shorts is far lighter and faster than the regular video player (that has the fullscreen features that i wanted for shorts).

This was really made so that i could watch shorts in fullscreen mode.  
Im sure that i could have injected the player with an expanded (and dynamic) iframe but thats for the future. 
