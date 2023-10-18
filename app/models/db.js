var mongoose = require('mongoose');

//SETUP MONGOOSE
//cloud platform -> MLAB URI
// mongoose.connect('mongodb://<dbusername>:<dbpassword>@ds044577.mlab.com:44577/node-crud-restapi', {
//     useMongoClient: true
// });

//SETUP MONGOOSE
//Local platform -> MONGODB
// mongoose.connect('mongodb://localhost:27017/node-crud', {
//     useMongoClient: true
// });

module.exports = connect = (url = process.env.DB_URL, opts = {}) => {
    mongoose.connect(url, {
        ...opts,
    });

    mongoose.connection.on('error', (err) => {
        console.log('err', err);
    });
    mongoose.connection.on('connected', (err, res) => {
        console.log('Connection establish');
    });
};
// export default connect;