var twit = require('twit');
var config = require('../common/config');
var tweet = new twit(config);
var _ = require('underscore');


var allowed_follows = [20, 24, 21, 25, 10, 30, 17];

function getUserFollowers() {
    tweet.get('followers/ids', {"screen_name":config.mentor_name},
        function(err, data, response){
            if(err){
                console.error(err)
            }
            console.log(data);
        });
}

function followUser(user_id) {
    var params = {
        "user_id":user_id,
        "follow":"true"
    };
    tweet.post('friendships/create',params, function (err, data, response) {
        if(err){
            console.error(err);
        }
        console.log("followed %s", data.name);
    });
}

function getFollowers(cursor, call_counter) {
    var params = {
        "screen_name":config.screen_name,
        "count":100,
        "cursor": cursor || -1
    };
    tweet.get('followers/ids',params,function (err, data, response) {
            if(err){
                console.error(err);
            }
            var call_count = call_counter || 1;
            var next_cursor = data.next_cursor;
            if(next_cursor > 0) {
                call_count = call_count + 1;
                console.log("sending request %s", call_count);
                console.log(next_cursor);
                console.log(data.ids);
                setTimeout(function () {
                    return getFollowers(next_cursor, call_counter);
                }, 3000)
            } else {
                return data;
            }
        });
}

function bot() {

}

module.exports = bot;
