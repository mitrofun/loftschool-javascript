var Router = {
    handle: function(route) {
        var routeName = route + 'Route';

        if (!Controller.hasOwnProperty(routeName)) {
            throw new Error('Маршрут не найден!');
        }

        Controller[routeName]();
    }
};

