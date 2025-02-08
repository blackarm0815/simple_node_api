
# simple_node_api


## install the 64 bit version of raspberry pi os


update
> sudo apt update && sudo apt upgrade

enable ssh (Interface options > ssh > yes)
> sudo raspi-config


find the raspberry pi ip addess and take a note of install (look under the wlan0 part)
> ifconfig

## ssh in and work remotely from this point

install stuff
> sudo apt install -y tmux git nginx nodejs npm vorbis-tools

tmux - runs the api even after ssh disconnects
git - for pulling the software repo
nginx - lightweight web server for handling the web pages
nodejs - runs javascript on the server
npm - node package manager for handling dependencies
vorbis-tools - can play audio files on the command line

pull this repo
> git clone https://github.com/blackarm0815/simple_node_api.git
> cd simple_node_api

install node dependencies
> npm install

edit the index.html file with nano and update the ip address in serverIpAddress (ctrl x to exit)
> nano index.html

put the web content into place

> sudo cp -r html/* /var/www/html

start a tmux session
> tmux new -s api

start the node api in tmux
> node api.js

detach the tmux session (ctrl-b then d)

list running tmux sessions
> tmux ls

reattach the tmux session
> tmux attach -t api

put the raspberry ip address in a browser followed

interact with the html elements and watch the tmux output