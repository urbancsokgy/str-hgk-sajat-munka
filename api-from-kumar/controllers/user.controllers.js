const UserService = require('../services/user.services')    

// Create a new User
exports.postUser=async (req, res, next)=>{
    const { name } = req.body;
    if (!name) {
       try {            
            throw new Error('Error while create new user!')
       } catch (e) {
            console.error(e.name + ': ' + e.message)
          }
       return {}     
    }
    const newUser = {
        name : name
    }
    try {
        const user= await UserService.postUser(newUser)
        return res.json(user);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

// Get users with params
exports.getUsers = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    console.log('REQ params', req.params);
    const from = req.params.from ? req.params.from : 1;
    const limit = req.params.limit ? req.params.limit : 10;
    try {
        const users = await UserService.getUsers({}, from, limit)
        return res.json(users);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

// Get all users
exports.getAllUser = async function (req, res, next) {
    try {
        const users = await UserService.getAllUser()
        return res.json(users);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

// Get one user
exports.getOneUser = async function (req, res, next) {
    try {
        console.log('Ez az id: ', req.params.id);
        const user = await UserService.getOneUser(req.params.id)
        if(res.body===null){console.log("Null return");}
        return res.json(user);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
// Update user
exports.patchUser = async function (req, res, next) {
    try {
        console.log('Ez az id az update-re: ', req.params.id);
        const id = req.params.id;
        const { name } = req.body;
        if (!name) {
            try {            
                throw new Error('Error while update user!')
           } catch (e) {
                console.error(e.name + ': ' + e.message)
              }
            return {}
        }
            const update = {
                name: name
            };
        const  patchUser=await UserService.patchUser(id, update)
        return res.json(patchUser)           
        }  
        catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}



// Delete one user by id
exports.deleteUser = async function (req, res, next) {
    try {
        console.log('Ez az id a törlésre: ', req.params.id);
        const user = await UserService.deleteUser(req.params.id)
        
        
        return res.json(user);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}