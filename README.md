# Colours Against Hate
Goal: A RWBY inspired version of [Cards Against Humanity](https://cardsagainsthumanity.com/) with support for custom expansions and all official expansions

## Installation
This uses [node](https://docs.npmjs.com/getting-started/installing-node) and [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm) along with [socket.io](https://socket.io/)

Install all the required packages with this below
```bash
npm install
```

If you want to rebuild the assets, the project uses gulp with the follow tasks setup
```bash
gulp # Run gulp build followed by gulp watch
gulp build # Build all the resources
gulp watch # Watch for any changes in the files setup to be watched, and re-run the relevant task
```

## Usage
Spin up a dev server using - Actual server yet to come!
```bash
npm start
```

Then go to http://localhost:3000 - or copy and paste the ngrok given in the command line if you want others to connect!

## Todo List

If you think this isn't a complete todo list, open up a new [issue](https://github.com/zeraphie/colours-against-hate/issues/new) and tell me what you'd like!

- [ ] Add channels for separate game instances - [this is helpful](https://gist.github.com/crtr0/2896891)
- [ ] User interface
    - [ ] Make a proper design!
    - [ ] Connection messages - User is connected/disconnected
        - [ ] Add desktop/mobile notifications for connection messages
    - [ ] Scores - How many points the user has scored
    - [ ] Add user timeout + message
        - [ ] Add desktop/mobile notifications for timeouts!
    - [ ] Create config interface - After username has been entered?
        - [ ] Select which card sets to be included
        - [ ] Select if blank cards are added and how many
        - [ ] Select when scoring should stop (i.e. someone's won)
        - [ ] Channel creator
            - [ ] Password protect some channels
- [ ] Chat
    - [ ] Make a proper design!
    - [ ] Add limited markdown support
    - [ ] Add some emoji support?
    - [ ] Add desktop/mobile notifications for chat messages
    - [ ] Add blank cards
- [ ] Cards
    - [ ] Make a proper design!
    - [ ] Selection - Refine card selection stuff
        - [ ] Add desktop/mobile notifications for when a new black card is shown
    - [ ] Add Card Czar
    - [ ] Animations (use [velocity](http://velocityjs.org/)?) Maybe based on the old hearts window game?
    - [ ] Trigger scoring when Card Czar picks a white card
    - [ ] Add card lists
        - [ ] Figure out layout for JSON
        - [ ] Separate expansions containing black and white cards
        - [ ] Dynamic selection of cards to include in the game
        - [ ] Method for users to add their own? Perhaps PRs?
- [ ] Server
    - [ ] Get a domain! Maybe colours-against-hate.io?
    - [ ] Get a server! Need a node js production server I guess :p
- [ ] Code
    - [x] Add an asset compiler? Used gulp with es6/scss support
        - [ ] Convert code to ES6
        - [ ] Possibly change to vue/vueify?
    - [ ] Modularise this project!
