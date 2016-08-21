var Model = {
    login: function(appId, perms) {
        return new Promise(function(resolve, reject) {
            VK.init({
                apiId: appId
            });

            VK.Auth.login(function(response) {
                if (response.session) {
                    resolve(response);
                } else {
                    reject(new Error('Не удалось авторизоваться'));
                }
            }, perms);
        });
    },
    callApi: function(method, params) {
        return new Promise(function(resolve, reject) {
            VK.api(method, params, function(response) {
                if (response.error) {
                    reject(new Error(response.error.error_msg));
                } else {
                    resolve(response.response);
                }
            });
        });
    },
    getUser: function (user = '', fields = '') {
        return this.callApi('users.get', {user_ids: user, fields: fields});
    },
    getMusic: function() {
        return this.callApi('audio.get', {});
    },
    getFriends: function() {
        return this.callApi('friends.get', {fields: 'photo_100'});
    },
    getNews: function() {
        return this.callApi('newsfeed.get', {filters: 'post', count: 20});
    },
    getGroups: function() {
        return this.callApi('groups.get', {extended: true, v: 5.53});
    },
    getPhotos: function() {
        return this.callApi('photos.getAll', {extended: true, count: 200, skip_hidden: true, v: 5.53});
    },
    getPhotosComments: function () {
        return this.callApi('photos.getAllComments', {count: 200, v: 5.53})
    },
    getPhotosAlbums: function () {
        return this.callApi('photos.getAlbums', {need_system: true, v: 5.53})
    }
    
};
