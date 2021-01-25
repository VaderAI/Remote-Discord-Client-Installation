# Remote-Discord-Client-Installation
It is not confirmed whether this type of tech is bannable or not bannable in discord, since a bot token is used rather than a user token in this project, so use at your own risk. 

Installation process is quite tedious, so you better read carefully. Pictures for each step will be provided

1) Set up two discord bots, and named them whatever you want. Name your first bot (Username(RDC)) and your second bot (Username(LIS)). Add these two bots to a discord server. 

2) Now that you set your bots up, go to the website called repl.it. Set up two new Node.js projects. Name one of them Remote Discord Listener, and the other Remote Discord Sender. 

3) Once you set up the two projects, go to the packages section of the repl.its and download the Discord.js package for both Repls. 

4) Afterwards, go to the scriptone.js of this github, and copy paste the code to the Remote Discord Listener repl. Copy paste your bot token to the part where it says TOKEN in client.login(TOKEN).  To test whether it works, go hit run in the Remote Discord Listener repl, and the output should return the messages in the servers that the bot is added to. The first part of the RDC is finished!

5) Then, go to scripttwo.js of the github, and copy paste the code to the Remote Discord Sender Repl. Copy paste your token to the token section, and copy paste your channel id to the channel id section, you do not have to copy paste four channel ids, just as much as you want! Then hit run, and see if it works. There you go, the RDC is DONE! ENJOY TALKING IN DISCORD THROUGH ANOTHER SOURCE!
