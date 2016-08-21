var Controller = {
    musicRoute: function() {
        return Model.getMusic().then(function(music) {
            results.innerHTML = View.render('music', {list: music});
        });
    },
    friendsRoute: function() {
        return Model.getFriends().then(function(friends) {
            results.innerHTML = View.render('friends', {list: friends});
        });
    },
    newsRoute: function() {
        return Model.getNews().then(function(news) {
            results.innerHTML = View.render('news', {list: news.items});
        });
    },
    groupsRoute: function() {
        return Model.getGroups().then(function(groups) {
            // console.log(groups);
            results.innerHTML = View.render('groups', {list: groups.items });
        });
    },
    photosRoute: function() {
        return Model.getPhotos().then(function(photos) {

            function updateProperty(obj) {
                for (let i = 0; i < obj.count; i++) {

                    let changedObj = obj.items[i];
                    changedObj.comments = {
                        count: 0,
                        items: []
                    }
                }
            }

            updateProperty(photos);
            return photos;

        }).then(function (photos) {

            function updateComment(comment) {
                Model.getUser(comment.from_id, ['photo_50']).then(function (user) {
                    comment.user = user;
                })
            }

            function updatePhoto(comment) {
                for (let i=photos.count- 1; i >= 0; i--) {
                    let photo = photos.items[i];
                    if(photo.id == comment.pid) {
                        photo.comments.count ++;
                        photo.comments.items.push(comment);
                    }
                }
            }

            Model.getPhotosComments().then(function(allComments) {
                for (let i=allComments.count- 1; i >=0; i--) {
                    let comment = allComments.items[i];
                    updateComment(comment);
                    updatePhoto(comment)
                }
            });

            return photos;

        }).then(function (photos) {

            Model.getPhotosAlbums().then(function(albums) {
                allAlbums = albums;
            });

            let allAlbums = {};

            console.log(photos);
            fn = function () {
                console.log(allAlbums);
                results.innerHTML = View.render('photos', {photos: photos.items, albums:allAlbums.items});
            };
            setTimeout(fn, 500);
        });
    }
};
