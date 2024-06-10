const Astrologer = require('../models/Astrologer');
const User = require('../models/User');

const {distributeUsers}= require('../services/distributionService');

let astrologers=[];
let users=[];

const addAstrologer =(req, res) =>{
    const {id, name}= req.body;
    const astrologer= new Astrologer(id, name);
    astrologers.push(astrologer);
    res.status(201).send(astrologer);
};

const addUser =(req, res)=>{
    const {id}= req.body;
    const user= new User(id);
    users.push(user);
    res.status(201).send(user);
};


const distribute= (req, res)=> {
    astrologers= distributeUsers(users, astrologers);
    res.send(astrologers);
};

const toggleAstrologer = (req, res)=> {
    const astrologer= astrologers.find(a => a.id === req.params.id);
    if(astrologer){
        astrologer.isTop = !astrologer.isTop;
        res.send(astrologer);
    }else{
        res.send(404).send({message: 'Astrologer not found'});

    }
};

const deleteAllData = (req, res) => {
    astrologers = [];
    users = [];
    res.status(200).json({ message: 'All data deleted successfully' });
};


module.exports={addAstrologer, addUser,distribute, toggleAstrologer,deleteAllData};