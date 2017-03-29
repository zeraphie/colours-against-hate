function chatMessageSend() {
    document.getElementById('message').addEventListener('submit', function (e) {
        e.preventDefault();

        if (document.getElementById('m').value) {
            config.socket.emit(
                'chat:message:send',
                {
                    text: document.getElementById('m').value,
                    time: (new Date()).getTime(),
                    user: config.user
                }
            );

            document.getElementById('m').value = '';
        }

        return false;
    });

    config.socket.on('chat:message:send', function (message) {
        var messages = document.getElementById('sent-messages');

        if (messages.querySelector('.typing[data-user="' + message.user + '"]')) {
            messages.querySelector('.typing[data-user="' + message.user + '"]').remove();
        }

        var el = helpers.append('li', message.text, messages);

        el.setAttribute('data-timestamp', message.time);
        el.setAttribute('data-user', message.user);

        if (config.isCurrentUser(message.user)) {
            el.classList.add('current-user');
        }

        messages.scrollTop = messages.scrollHeight;
    });
}
