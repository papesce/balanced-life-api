var backup = require('mongodb-backup');
var restore = require('mongodb-restore');

class MongoDBUtils {
    
    static execute(API){
        MongoDBUtils.backup(API);
    }

    static backup(API) {
        //backup and restore DB
        console.log(`backing up the database ${API}`);
        backup({
            uri: API, // mongodb://<dbuser>:<dbpassword>@<dbdomain>.mongolab.com:<dbport>/<dbdatabase> 
            root: __dirname + '/dbbackup',
            tar: 'dump.tar'
        });
    }

    static restore(API) {

        restore({
            uri: API, // mongodb://<dbuser>:<dbpassword>@<dbdomain>.mongolab.com:<dbport>/<dbdatabase>
            root: __dirname + '/dbbackup',
            tar: 'dump.tar',
            drop: true
        });
    }
}

module.exports = MongoDBUtils;