# udundi-test

1. Live Website Running Here
https://glitch.com/~udundi-test

2. Post submission and improved version : https://udundi-test-b.glitch.me.
This Includes better animation toggling and mobile layout.

Summary
------------
Althought the majority of the test was completed within a couple of hours, the vast majority of the 6 or so hours went into conceptualizing and implementing the transition animations, refactoring, and some trial and error. Finally, some time was spent on the mobile styles.

The layout has a very print-like, large-format feel and I chose animations that take advantage that. Slow fades and swipes are slightly cinematic and still work on the mobile versions in inspector testing, aesthetically speaking.

I used the recommended animation library for the initial "Explore" fade and a custom animation for the reveal of the detail box. I had been wanting to return to the clip CSS property and work with detecting animation completion to help toggle between states. 

The HTML structure reflects this in that two sibling chunks are treated as state of the UI, similar to website that have wholey separate mobile menus, rather than restyling the one. I preferred having separate groups of elements in this case, rather than shoehorning the "Explore" text into two different layouts and completely rewriting its CSS for "open" or "active state. 

The project is hosted on Glitch.com for ease of spin-up, export to Github, and sharing with your team. 

