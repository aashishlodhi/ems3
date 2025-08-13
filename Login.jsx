"use client";
import React ,{useState} from 'react'

const Login = ({handleLogin}) => {
    console.log(handleLogin)
  
    // State to hold email and password
    // These states will be used to store the values of the input fields    
    // Using React's useState hook to manage the state of email and password
    // This allows us to create controlled components where the input values are tied to the state
    // This is useful for form handling in React
    // When the input value changes, we update the state with the new value

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    // Function to handle form submission
    // This function will be called when the form is submitted
    // It prevents the default form submission behavior and can be used to handle login logic
    // For example, you might want to send the email and password to your authentication API
    // and handle the response accordingly.
    // You can also add validation and error handling as needed.

    const submitHandler = (e) => {
        // Handle login logic here
        e.preventDefault();
        handleLogin(email, password)
      
        ///form submition
        // For example, you might want to send the email and password to your authentication API
        // and handle the response accordingly.
        // console.log("Email:", email);
        // console.log("Password:", password);
        // You can also add validation and error handling as needed.
        // console.log("Login submitted");

        setEmail("");
        setPassword("");
    }
    return (
        <div className='flex h-screen w-screen   items-center justify-center'>
            {/* 
                This is the main container for the login form
                It uses flexbox to center the form both horizontally and vertically
             // This is the login form
                // It contains two input fields for email and password
                // The form is a controlled component, meaning the input values are tied to the state
                // When the input value changes, we update the state with the new value
                // The form submission is handled by the submitHandler function */}
            <div className='border-2 rounded-xl border-emerald-600 p-20 ' >
                <form 
                    onSubmit={submitHandler}
                    className='flex flex-col items-center justify-center' action="">
                    <input 
                        //this is the email input field
                        //is used to get the email from the user and set it to the email state also this is a controlled component and
                        //  we can use it to get the value of the input field
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            ////consolelog 
                            // console.log(e.target.value)
                        }}
                        required className=' text-emrald outline-none placeholder:text-gray-400  border-2 py-3 px-5 mt-4 border-emerald-600 rounded-full text-xl' type="email" placeholder='Enter Your Email' />
                    <input 
                        //this is the password input field
                        //is used to get the password from the user and set it to the password state also this is a controlled component and
                        //  we can use it to get the value of the input field   
                        value={password}
                        onChange={(e) => {
                            //set the password state
                            setPassword(e.target.value);
                            ////consolelog 
                            //console.log(e.target.value)
                        }}
                        required className=' text-emrald outline-none placeholder:text-gray-400 border-2 py-3 px-5 mt-4 border-emerald-600 rounded-full text-xl' type="password" placeholder='Enter Your Password' />
                    <button className=' mt-5 text-emrald border-none bg-emerald-600 text-xl py-3 px-5 rounded-full ' type='submit'>Log in</button>
                </form>
            </div>  
        </div>
    )
}

export default Login