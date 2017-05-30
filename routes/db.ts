import {Config} from  './config' ;
import {DocumentClient} from 'documentdb'
import Promise  = require('Promise')

export class DBAccess {
    constructor(){};
    private  _config = new Config();
    private  client = new DocumentClient(this._config.endpoint, { "masterKey": this._config.password });
    private  HttpStatusCodes = { NOTFOUND: 404 };
    private databaseUrl = `dbs/${this._config.databaseid}`;
    private collectionUrl = `${this.databaseUrl}/colls/${this._config.collectionid}`;
    public getData (query): Promise { 
        return  new Promise   ((resolve, reject) => {
                var cmd =  'SELECT * FROM c where c.id =\'' + query.id + '\'' ;
                this.client.queryDocuments(
                this.collectionUrl, cmd
                ).toArray((err, results) => {
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