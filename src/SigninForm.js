import { useEffect, useState } from "react";

function SigninForm(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [invalidEmail, setInvalidEmail] = useState(false);

    useEffect(()=> {
        if(email.endsWith("gmail.com")){
            setInvalidEmail(false);
        } else {
            setInvalidEmail(true);
        }
    }, [email]);
    

    function signIn(event){
        if(email === "abc@gmail.com" && password === "12345"){
            alert("Success")
        } else {
            alert("Invalid cred")
        }
    }

    function handleChange(event) {
        console.log(event.target.id)
        if(event.target.id === "email"){
            setEmail(event.target.value);
        } else {
            setPassword(event.target.value)
        }
    }

    return (
        <form id="signin-form" onSubmit={(event)=>event.preventDefault()}>
            <input type="text" placeholder="Email" id="email" value={email} onChange={handleChange}/>
            {
                !email ? <div className="error"> Please enter Email </div> : ""
            }
            {
                invalidEmail ? <div className="error">Only Gmails are allowed</div> : ""
            }
            <input type="password" id="password" placeholder="Password" value={password} onChange={handleChange}/>
            {
                !password ? <div className="error"> Please enter Password </div> : ""
            }
            <button onClick={signIn}>SignIn</button>
        </form>
    )
}

export default SigninForm;