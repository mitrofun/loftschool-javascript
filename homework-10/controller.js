let Photos = [];
let Albums = {};
let Menu = [
    {
        "title": "по комментариям", 
        "name": "comments"
    },
    {
        "title": "по репостам", 
        "name": "reposts"
    },
    {
        "title": "по лайкам",
        "name": "likes"
    },
    {
        "title": "по дате добавления", 
        "name": "date"
    }
];

function sortArrayByParam(array, param) {
    array.sort(function(a, b) {
        let x,y;
        if (param == 'date') {
            x = a.date;
            y = b.date;
            if (x < y) return -1;
            if (x > y) return 1;
            else return 0;
        } else {
            x = a[param].count;
            y = b[param].count;
            if (x < y) return 1;
            if (x > y) return -1;
            else return 0;
        }
    });
}

let Controller = {
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
        
        let preloader = document.querySelector('.loading');
        let results = document.getElementById('results');
        
        preloader.style.display = 'block';
        results.style.display = 'none';
        
        let getPhotosPromise = Model.getPhotos().then(function(photos) {

            return photos.items.map(function (photo) {
                photo.comments = {
                    count: 0,
                    items: []
                };
                return photo;
            });
        });

        let getCommentsPromise = Model.getPhotosComments().then(function(allComments) {

                return allComments.items.map(function (comment) {
                    Model.getUser(comment.from_id, ['photo_50']).then(function (user) {
                        comment.user = user;
                    });
                    return comment;
                });

            });

        let getPhotosAlbumsPromise = Model.getPhotosAlbums().then(function(albums) {
            return albums;
        });

        let TestTimerPromise = new Promise((resolve) => {
            setTimeout(resolve, 2500);
        });

        Promise.all([getPhotosPromise, getCommentsPromise, getPhotosAlbumsPromise]).then(values => {

            let photos = [], albums = {}, comments = [];
            [photos, comments, albums ] = values;

            function updatePhoto(photo) {
                comments.map(function (comment) {
                    if (comment.pid == photo.id) {
                        photo.comments.count ++;
                        photo.comments.items.push(comment);
                    }
                    return photo;
                })
            }

            photos.map(function (photo) {
                return updatePhoto(photo);
            });

            return [photos, albums];

        }).then(values => {
            // console.log(values);

            [Photos, Albums] = values;

            preloader.style.display = 'none';
            results.style.display = 'block';

            results.innerHTML = View.render('photos', {photos: Photos , albums: Albums.items, menu:Menu});
        });
    },

    sortPhotosRoute: function () {

        let resultPhoto = document.getElementById('resultPhoto');
        let hash = document.location.hash.split('#')[1];
        
        sortArrayByParam(Photos, hash);
        resultPhoto.innerHTML = View.render('photos', {photos: Photos, albums: Albums.items});
    }
};
