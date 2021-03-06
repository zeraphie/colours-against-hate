document.getElementById('username-input').addEventListener('submit', function(e){
    e.preventDefault();

    if(document.getElementById('username').value){
        config.user = document.getElementById('username').value;
        document.querySelector('.intro-screen').classList.add('inactive');

        setTimeout(function(){
            document.querySelector('.intro-screen').remove();
            document.querySelector('.cah-screen').classList.remove('inactive');

            setTimeout(function(){
                cardsSelected();
                chatMessageSend();
                chatMessageTyping();
            })
        }, 310);
    }

    return false;
});
