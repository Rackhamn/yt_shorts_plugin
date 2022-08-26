# Youtube Shorts as Video
Chromium plugin to watch Youtube shorts as regular Youtube videos.

It (should) intercept all Youtube traffic that tries to play shorts and redirect you to a standard Youtube video format version of that short.

After som tinkering, it now uses Manifest V3 and a background worker that wakes up once you interact with any 'youtube.com/shorts/*' page.  
Then it makes it able for you to redirect into a working standard Youtube watch window.

## Issue:
The plugin unfortunately needs to perform a redirect and block the previus request at the same time.  
Sometimes this works well, sometimes it loads two pages. One for the short and then one for the video.

It is also unfortunate that the Youtube player for shorts is far lighter and faster than the regular video player (that has the fullscreen features that i wanted for shorts).

This was really made so that i could watch shorts in fullscreen mode.  
Im sure that i could have injected the shorts player with an expanded (and dynamic) iframe but thats for the future. 
