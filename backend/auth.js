const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.authenticate = (username, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findOne({username});
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    resolve(user);
                } else {
                    reject('Authentication failed - password didnt match');
                }
            });
        } catch (err) {
            reject('Authentication failed - username not found!');
        }
    });
}
 