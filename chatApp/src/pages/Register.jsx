import React, { useState } from 'react'
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth ,db,storage} from '../Firebase';
import {   ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from 'react-router-dom';


function Register() {
const [err, setErr] = useState(false)
const navigate = useNavigate()

const handleSubmit = async (e) =>{
e.preventDefault()
const displayName = e.target[0].value;
const email = e.target[1].value;
const password = e.target[2].value;
const file = e.target[3].files[0];

try{
const res = await createUserWithEmailAndPassword(auth, email, password);

const storageRef = ref(storage, displayName);

 await uploadBytesResumable(storageRef, file).then(()=>{

    getDownloadURL(storageRef).then(async(downloadURL) =>{
      try{

    await updateProfile(res.user, {
      displayName,
      photoURL:downloadURL,
    });

await setDoc(doc(db, "users", res.user.uid),{
uid : res.user.uid,
displayName,
email,
photoURL : downloadURL
})



await setDoc(doc(db, "userChats", res.user.uid),{});
navigate("/")


}catch(err){
  console.log(err);
  setErr(true)
}  
    })
  })
}catch(err){
  setErr(true);
}
}



  return (
 <div className="formContainer">
    <div className="formWrapper">
        <span className='logo'>Chatter Box</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='display name' />
            <input type="email"  placeholder='email'/>
            <input type="password" placeholder='password'/>
            <input style={{display:'none'}}type="file" id='file'/>
            <label htmlFor="file">
            {/* <img src="" alt="" /> */}
            Add Image
            </label>
            <button>Sign Up</button>
            {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an account ? <Link to="/login">Login</Link></p>
    </div>
 </div>
  )
}

export default Register
