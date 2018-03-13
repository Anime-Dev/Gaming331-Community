var PERM = require('../Perms');
var request = require('request');
var Q = require('q');

var imagefinder = /<img id="main-comic" src="([^"]+)"\/?>/g;
var idfinder = /<input id="permalink" value="http:\/\/explosm\.net\/comics\/([0-9]+)/g

module.exports = function () {

    function Prequest(url) {
        return Q.Promise(function (resolve, reject, notify) {
            request(url, function (error, response, body) {
                if (error) {
                    console.error('Explosm error:', error);
                    reject(error);
                }
                else {
                    resolve(body);
                }
            });
        });
    }

    var explosm = {
        Name: "explosm",
        Usage: "$explosm [number|latest]",
        Description: "Makes you laugh and get depressed at the same time",
        Function: function (command, args, message) {
            var p;
            if (args.length > 0) {
                if (args[0] === "latest") {
                    p = Prequest("http://explosm.net/comics/latest");
                }
                else if (Number(args[0]) !== NaN) {
                    p = Prequest("http://explosm.net/comics/" + args[0] + "/");
                }
            }
            if (p === undefined) {
                p = Prequest("http://explosm.net/comics/random");
            }
            p.then(function (body) {
                var im = imagefinder.exec(body);
                var id = idfinder.exec(body);
                if (im.length < 2 || id.length < 2) {
                    throw "no match";
                }
                return { image: "http:" + im[1], id: id[1] };
            }).then(function (ii) {
                var embed = message.getRichEmbed()
                    .setAuthor("Explosm", "http://files.explosm.net/img/favicons/site/favicon-32x32.png")
                    .setTitle(ii.id)
                    .setImage(ii.image)
                    .send();
            })
                .catch(function () {
                    message.replyEmbed("Something went wrong").then(mess => mess.delete(5000).catch(console.error));
                });
        },
        Channels: [PERM.channels.channelnames.botchannel]
    };
    var that = {
        ModuleName: "Explosm",
        Commands: [explosm]
    };
    return that;
};