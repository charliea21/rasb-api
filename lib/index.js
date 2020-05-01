/// RASB API \\\
// Written by OMG_ \\

// Docs @ https://github.com/charliea21/rasb-api/wiki

const fetch = require("node-fetch");

const API_URL = "";

function validate(rej) {
    return (response) => {
        if (response.ok) {
            return response;
        } else {
            if (res.status == 403) { // TODO: use better type checking
                // Invalid API key
            } else {
                // Server Error 
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
        });
    };

    /**
     * @description Get all bans in the RASB database
     * @returns {Promise<Array<String>>}
     */
    getBans() {
        return new Promise((res, rej) => {
            let apiKey = this.apiKey || "";
        });
    };
};

module.exports = exports = RASB;
