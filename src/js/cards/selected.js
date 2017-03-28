function cardSelected(){
    document.querySelectorAll('.game .cards a').forEach(function(link){
        link.addEventListener('click', function(e){
            e.preventDefault();

            app.socket.emit(
                'cards:selected',
                {
                    text: e.target.textContent,
                    time: (new Date()).getTime(),
                    user: app.user
                }
            );

            return false;
        });
    });

    app.socket.on('cards:selected', function(selected){
        var el = helpers.append(
            'li',
            selected.text,
            document.getElementById('selected-cards')
        );

        el.setAttribute('data-timestamp', selected.time);
        el.setAttribute('data-user', selected.user);

        if(app.isCurrentUser(selected.user)){
            el.classList.add('current-user');
        }
    });
}
