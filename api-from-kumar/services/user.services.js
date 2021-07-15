const User = require('../models/user.model')


exports.postUser = async function (newUser) {

    try {
        const user = new User(newUser)
        return await user.save()
    } catch (e) {
        // Log Errors
        throw Error('Error while create new user')
    }
}
exports.getUsers = async function (query, from, limit) {
    try {
        const users = await User.find(query)
        return users.splice(from-1, limit);
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}
exports.getAllUser = async function () {
    try {const users = await User.find()
        return users
    } catch (e) {
        // Log Errors
        throw Error('Error while get all user')
    }
}
exports.getOneUser = async function (id) {
    try {
        const user = await User.findById(id)
        return user;
    } catch (e) {
        // Log Errors
        throw Error('Error while get one user')
    }
}
exports.patchUser = async function (id, updateUser) {
    try {
        return await User.findByIdAndUpdate(id, updateUser, {new : true})
    } catch (e) {
        // Log Errors
        throw Error('Error while update user')
    }
}

exports.deleteUser = async function (id) {
    try {
        const user = await User.findByIdAndDelete(id)
        return {}
    } catch (e) {
        // Log Errors
        throw Error('Error while delete one user')
    }
}