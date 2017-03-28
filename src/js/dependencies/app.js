var app = {
    socket: io(),
    user: Math.random(), // Replace with actual username
    setupTime: (new Date()).getTime(),
    isCurrentUser: function(user){
        return user + app.setupTime.toString()
            ===
        app.user + app.setupTime.toString();
    }
};
