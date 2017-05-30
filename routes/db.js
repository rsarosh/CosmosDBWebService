"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const documentdb_1 = require("documentdb");
const Promise = require("Promise");
class DBAccess {
    constructor() {
        this._config = new config_1.Config();
        this.client = new documentdb_1.DocumentClient(this._config.endpoint, { "masterKey": this._config.password });
        this.HttpStatusCodes = { NOTFOUND: 404 };
        this.databaseUrl = `dbs/${this._config.databaseid}`;
        this.collectionUrl = `${this.databaseUrl}/colls/${this._config.collectionid}`;
    }
    ;
    getData(query) {
        return new Promise((resolve, reject) => {
            var cmd = 'SELECT * FROM c where c.id =\'' + query.id + '\'';
            this.client.queryDocuments(this.collectionUrl, cmd).toArray((err, results) => {
                if (err) {
                    reject(err);
                }
                else {
                    console.log();
                    resolve(results);
                }
            });
        });
    }
}
exports.DBAccess = DBAccess;
//# sourceMappingURL=db.js.map