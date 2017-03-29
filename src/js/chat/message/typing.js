function chatMessageTyping() {
    document.getElementById('m').addEventListener('input', function (e) {
        e.preventDefault();

        if (e.target.value) {
            config.socket.emit(
                'chat:message:typing',
                {
                    time: (new Date()).getTime(),
                    user: config.user
                }
            );
        }

        return false;
    });

    config.socket.on('chat:message:typing', function (message) {
        var messages = document.getElementById('sent-messages');

        if (!messages.querySelector('.typing[data-user="' + message.user + '"]')) {
            var el = helpers.append('li', '', messages);

            el.setAttribute('data-timestamp', message.time);
            el.setAttribute('data-user', message.user);

            el.classList.add('typing');

            if (config.isCurrentUser(message.user)) {
                el.classList.add('current-user');
            }

            messages.scrollTop = messages.scrollHeight;
        }
    });
}
