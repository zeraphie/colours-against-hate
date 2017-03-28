# Colours Against Hate
Goal: A RWBY inspired version of [Cards Against Humanity](https://cardsagainsthumanity.com/) with support for custom expansions and all official expansions

## Installation
This uses [node](https://docs.npmjs.com/getting-started/installing-node) and [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm) along with [socket.io](https://socket.io/)

Install all the required packages with this below
```bash
npm install
```

## Usage
Spin up a dev server using - Actual server yet to come!
```bash
node server.js
```

Then go to http://localhost:3000 - or copy and paste the ngrok given in the command line if you want others to connect!

## Todo List

If you think this isn't a complete todo list, open up an issue and tell me what you'd like!

- [ ] Add channels for separate game instances - [this is helpful](https://gist.github.com/crtr0/2896891)
- [ ] User interface
    - [ ] Make a proper design!
    - [ ] Connection messages - User is connected/disconnected
    - [ ] Scores - How many points the user has scored
- [ ] Chat
    - [ ] Make a proper design!
    - [ ] Add limited markdown support
    - [ ] Add some emoji support?
- [ ] Cards
    - [ ] Make a proper design!
    - [ ] Selection - Refine card selection stuff
    - [ ] Animations (use [velocity](https://gist.github.com/crtr0/2896891)?) Maybe based on the old hearts window game?
    - [ ] Trigger scoring
    - [ ] Add card lists
        - [ ] Separate expansions containing black and white cards
        - [ ] Dynamic selection of cards to include in the game
        - [ ] Method for users to add their own? Perhaps PRs?
- [ ] Server
    - [ ] Get a domain! Maybe colours-against-hate.io?
    - [ ] Get a server! Need a node js production server I guess :p
- [ ] Code
    - [x] Add an asset compiler?
        - [ ] Possibly change to vue/vueify?
    - [ ] Modularise this project!
