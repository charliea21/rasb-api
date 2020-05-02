/// RASB API \\\
// Written by OMG_ \\

// Docs @ https://github.com/charliea21/rasb-api/wiki

const fetch = require("node-fetch");

const API_URL = "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/rasb-web-api-twpry/service/rasb-web/incoming_webhook/api";

function validate(rej) {
    return (response) => {
        if (response.ok) {
            return response;
        } else {
            if (response.status == 403) { // TODO: use better type checking
                // Invalid API key
                rej(new Error("Invalid RASB API key"));
            } else {
                // Server Error 
                console.log(response);
                rej(new Error("Internal server/network error"));
            }
        }
    };
};

class RASB {
    /**
     * @description Creates a new RASB API class with the specified API key
     * @param {String} apiKey 
     */
    constructor(apiKey) {
        this.apiKey = apiKey || "";
    }

    /**
     * @description Check if a user's Discord ID is in the RASB blacklist database
     * @param {String} userId
     * @returns {Promise<Boolean>}
     */
    isUserBanned(userId) {
        return new Promise((res, rej) => {
            let apiKey = this.apiKey || "";
            fetch(API_URL, {
                method: "POST",
                body: JSON.stringify({ key: apiKey, option: "checkBan", userId: userId }),
                headers: {
                    "Content-Type": "application/json",
                    "User-Agent": "RASB-API/1.0 (+https://www.npmjs.com/package/rasb)"
                }
            }).then(validate(rej)).then(response => response.json()).then((data) => {
                if (data.status == 200) {
                    res(data.banned);
                } else {
                    rej(new Error("Internal API error"));
                }
            }).catch(rej);
        });
    };

    /**
     * @description Get all bans in the RASB database
     * @returns {Promise<Array<String>>}
     */
    getBans() {
        return new Promise((res, rej) => {
            let apiKey = this.apiKey || "";
            fetch(API_URL, {
                method: "POST",
                body: JSON.stringify({ key: apiKey, option: "getBans" }),
                headers: {
                    "Content-Type": "application/json",
                    "User-Agent": "RASB-API/1.0 (+https://www.npmjs.com/package/rasb)"
                }
            }).then(validate(rej)).then(response => response.json()).then((data) => {
                if (data.status == 200) {
                    let toSend = [];
                    data.bans.forEach((b) => {
                        toSend.push(b.discordId)
                    });
                    res(toSend);
                } else {
                    rej(new Error("Internal API error"));
                }
            }).catch(rej);
        });
    };
};

module.exports = exports = RASB;
