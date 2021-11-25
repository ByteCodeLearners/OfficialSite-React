import { useState } from "react";
import swal from 'sweetalert';

const RegistrationForm = () => {
    const [f_name,setFname] = useState("");
    const [m_name,setMname] = useState("");
    const [l_name,setLname] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [linked,setLinked] = useState("");
    const [yt,setYt] = useState("");
    const [fb,setFb] = useState("");
    const [twit,setTwit] = useState("");
    const [insta,setInsta] = useState("");
    const [gh,setGh] = useState("");
    const [pass1,setPass1] = useState("");
    const [pass2,setPass2] = useState("");
    const handleShowPass = ()=>{
        const pass2 = document.querySelector('#pass2');
        const eye = document.querySelector('.pass2');
        if(pass2.type == 'password'){
            eye.classList.replace('fa-eye','fa-eye-slash');
            pass2.type = 'text';
        }else{
            eye.classList.replace('fa-eye-slash','fa-eye');
            pass2.type = 'password';
        }
    }
    const checkPassword = (e)=>{
        const reType = document.querySelector('#retype');
        if(pass1 == e.target.value && pass1 != ''){
            reType.style.color = 'green';
        }else{
            reType.style.color= "#fc5c65";
        }
    }
    const handleSubmit = ()=>{
        const file = document.querySelector('#file');
        if(f_name == '' || l_name == '' || email == '' || mobile == '' || pass1 == '' || pass2 == ''||file.value == ''){
            swal("Empty Fields","Please enter all required input fields.","info");
        }else if(pass1 !== pass2){
            swal("Error","Passwords didn't match.","error");
            document.querySelector('#pass2').focus();
            return;
        }else if(!(/[A-Za-z0-9_\.]+@\w+\.[a-z]+/).test(email)){
            swal("E-Mail","Enter a valid mail id.","error");
            return;
        }else if(mobile.length > 12 || !((/[0-9]{10}/).test(mobile)) || (/\D+/).test(mobile)){
            swal("Mobile Number","Enter a valid mobile number.","error");
            return;
        }else if(pass1.length<6 || !(pass1.search(/[A-Z]/)>-1) || !(pass1.search(/[0-9]/)>-1) || !(pass1.search(/[$&+,!:;=?@#]/) > -1)){
            swal("Password","Enter a strong password...","info")
            document.querySelector('#pass1').focus();
            return;
        }else{
            swal("Success","Your response is submitted successfully...","success");
            setEmail('');
            setFb('');
            setFname('');
            setGh('');
            setInsta('');
            setLinked('');
            setLname('');
            setMname('');
            setMobile('');
            setPass1('');
            setPass2('');
            setTwit('');
            setYt('');
            document.querySelector('#file').value = null;
            document.querySelector('#retype').style.color = 'white';

            return;
        }
    }
    return ( <div className="regis-form">
        <h1>Fresher's Registration</h1>
        <form onSubmit={(e)=>{e.preventDefault()}} autoComplete="off">
            <div className="inputs">
                <div className="input">
                    <input value={f_name} placeholder=" " onChange={(e)=>{setFname(e.target.value)}} type="text" name="f_name" id="f_name" required/>
                    <label className="label" htmlFor="f_name">First Name<span>*</span></label>
                </div>
                <div className="input">
                    <input value={m_name} placeholder=" " onChange={(e)=>{setMname(e.target.value)}} type="text" name="m_name" id="m_name" />
                    <label className="label" htmlFor="m_name">Middle Name</label>
                </div>
                <div className="input">
                    <input value={l_name} placeholder=" " onChange={(e)=>{setLname(e.target.value)}} type="text" name="l_name" id="l_name" required/>
                    <label htmlFor="l_name">Last Name<span>*</span></label>
                </div>
                <div className="input">
                    <input accept=".jpg,.jpeg,.png" placeholder=" "  type="file" name="file" id="file" required />
                    <i className="fas fa-camera"></i>
                </div>
                <div className="input">
                    <input value={email} placeholder=" " placeholder=" " onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" id="email" required/>
                    <label htmlFor="email">Email<span>*</span></label>
                </div>
                <div className="input">
                    <input value={mobile} placeholder=" " onChange={(e)=>{setMobile(e.target.value)}} type="phone" name="mobile" id="mobile" required/>
                    <label htmlFor="mobile">Mobile Number<span>*</span></label>
                </div>
                <div className="input">
                    <input value={linked} placeholder=" " onChange={(e)=>{setLinked(e.target.value)}} type="text" name="linked" id="linked" />
                    <label htmlFor="linked">LinkedIn Profile</label>
                </div>
                <div className="input">
                    <input value={yt} placeholder=" " onChange={(e)=>{setYt(e.target.value)}} type="text" name="yt" id="yt" />
                    <label htmlFor="yt">YouTube Channel</label>
                </div>
                <div className="input">
                    <input value={fb} placeholder=" " onChange={(e)=>{setFb(e.target.value)}} type="text" name="fb" id="fb" />
                    <label htmlFor="fb">FaceBook Profile</label>
                </div>
                <div className="input">
                    <input value={twit} placeholder=" " onChange={(e)=>{setTwit(e.target.value)}} type="text" name="twit" id="twit" />
                    <label htmlFor="twit">Twitter Profile</label>
                </div>
                <div className="input">
                    <input value={insta} placeholder=" " onChange={(e)=>{setInsta(e.target.value)}} type="text" name="insta" id="insta" />
                    <label htmlFor="insta">Instagram Profile</label>
                </div>
                <div className="input">
                    <input value={gh} placeholder=" " onChange={(e)=>{setGh(e.target.value)}} type="text" name="gh" id="gh" />
                    <label htmlFor="gh">GitHub Profile</label>
                </div>
                <div className="input">
                    <div className="validate">
                        <ul>
                            <li>{pass1.length>5?'✔️ ' : '❌ '}must be at least 6 characters</li>
                            <li>{pass1.search(/[A-Z]/) > -1?'✔️ ' : '❌ '}must contain a capital letter</li>
                            <li>{(pass1.search(/[0-9]/) > -1)?'✔️ ' : '❌ '}must contain a number</li>
                            <li>{(pass1.search(/[$&+,!:;=?@#]/) > -1)?'✔️' : '❌'}must contain one of $&+,:;=?@#</li>
                        </ul>
                    </div>
                    <input value={pass1} placeholder=" " onChange={(e)=>{setPass1(e.target.value)}} type="password" name="pass1" id="pass1" required/>
                    <label htmlFor="pass1">Password<span>*</span></label>
                </div>
                <div className="input">
                    <div className="validate">
                        <span>Password{pass1==pass2&&pass1!=''?' matched ✔️': ' didn\'t match ❌'}</span>
                    </div>
                    <input value={pass2} placeholder=" " onChange={(e)=>{setPass2(e.target.value);checkPassword(e);}} type="password" name="pass2" id="pass2" required />
                    <label htmlFor="pass2" id="retype">Re-type Password<span>*</span></label>
                    <i onClick={handleShowPass} className="fas pass2 fa-eye"></i>
                </div>
            </div>
            <div className="submit">
                <input onClick={handleSubmit} type="submit" value="Submit" />
                <p>(<span>*</span>) are required fields</p>
            </div>
        </form>
    </div> );
}
 
export default RegistrationForm;