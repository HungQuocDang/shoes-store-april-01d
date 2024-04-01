const mongoose = require('mongoose');
 //mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/happyfeet-shoppingb');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/happyfeet-shoppinga');
// seeded to MongoDB Atlas cloub
// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Hung1:LKI1G4P6rZKZJZlz@cluster0.rqdogfy.mongodb.net/?retryWrites=true&w=majority');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://hungb:Test1234@cluster0.pv7ehpy.mongodb.net/');

/////////this line works with heroku shielded-harbor-32787
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Hung1:Test1234@cluster0.xpplqfx.mongodb.net/happyfeet-shoppinga?retryWrites=true&w=majority');
/////////


// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://hungoct17:Test1234@cluster0.b00xfaa.mongodb.net/');


module.exports = mongoose.connection;
