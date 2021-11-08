const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
//REGISTER
router.post("/register",async (req,res)=>{
    //TODO : CHECK REQUIRED FIELDS
const newUser = new User({
        username : req.body.username,
        email:req.body.email,
        isAdmin:req.body.isAdmin,
        password:CryptoJS.AES.encrypt(req.body.password,process.env.PASSWORD_SECRET).toString()

   });
  try{
        const savedUser = await newUser.save();
        console.log(savedUser);
        res.status(201).json(savedUser);
  }
  catch(err)
  {
      console.log(err);
    res.status(500).json(err);
  }

})
//LOGIN
router.post("/login",async (req,res)=>{
    //TODO : CHECK REQUIRED FIELDS
 
const user = new User({
        username : req.body.username,
        password:req.body.password

} );

  try{
    const existingUser = await User.findOne( { username: user.username } );
  
       (!existingUser || existingUser===null) && res.status(401).json("Wrong credentials !");

            const hashedPassword = CryptoJS.AES.decrypt(existingUser.password,process.env.PASSWORD_SECRET);
            const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
            originalPassword!== user.password && res.status(401).json("Wrong credentials !");
           
            //Create JSON WEBTOKEN
            const accessToken = jwt.sign({id:existingUser._id,isAdmin:existingUser.isAdmin}, process.env.JWT_SECRET,{expiresIn:"3d"});            

            const {password,...others} = existingUser._doc;
       
            res.status(200).json({...others,accessToken});
      
        
  }
  catch(err)
  {
      console.log(err);
    res.status(500).json(err);
  }

})



module.exports = router;