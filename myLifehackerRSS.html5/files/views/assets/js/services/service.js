/*
 * Service settings
 */
var accountsDB_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "53236b30e4b04c7170e360e1"
}

/*
 * Services
 */

var LifehackerRSS = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'xml',
    'type': 'get',
});

var accountsDB_accounts_list_service = new Appery.RestService({
    'url': '{database_url}/collections/accounts',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': accountsDB_settings
});