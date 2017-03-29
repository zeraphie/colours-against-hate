var config = {
    socket: io(),
    user: Math.random(), // Replace with actual username
    setupTime: (new Date()).getTime(),
    isCurrentUser: function(user){
        return user + this.setupTime.toString()
            ===
        this.user + this.setupTime.toString();
    }
};
