var utils = {
    template : function(id){
        return _.template( $('#' + id).html() );
    },

    saveToStorage: function (key, collection) {
        localStorage.setItem(key, JSON.stringify(collection));
    },

    getCollection: function (title) {
        return JSON.parse(localStorage.getItem(title));
    }
};
