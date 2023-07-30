import React from "react";
import * as Components from './Components';
import "../App.css";
import { useRef, useState } from "react";
import { useToast } from "@chakra-ui/react";

function Login() {
    const [signIn, toggle] = React.useState(true);
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const [registering, setRegistering] = useState(false);
    const toast = useToast();
    const handleLogin=async()=>{
        const handleLogin= () => {
            const data = {
                email: email.current.value,
                password: password.current.value,
            };
    
            fetch("http://localhost:3000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.error) {
                        toast({
                            title: "Invalid Credentials",
                            description: "Please Try Again",
                            status: "error",
                            duration: 9000,
                            isClosable: true,
                        });
                    } else {
                        toast({
                            title: "Sign in completed",
                            description: "We are redirecting you to dashboard",
                            status: "success",
                            duration: 9000,
                            isClosable: true,
                        });
                        const email = email.current.value;
                        fetch("http://localhost:3000/api/login", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ email }),
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                const actualData = data[0];
                                const {
                                    email,
                                    address_line_1,
                                    address_line_2,
                                    pincode,
                                } = actualData;
                                localStorage.setItem("email", email);
                                localStorage.setItem(
                                    "address_line_1",
                                    address_line_1
                                );
                                localStorage.setItem(
                                    "address_line_2",
                                    address_line_2
                                );
                                localStorage.setItem("pincode", pincode);
                                window.location.href = "/Landing";
                            });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        };
    }
    const handleRegister = async () => {
        setRegistering(true);
        const data = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
        };
        await fetch("http://localhost:3000/api/SignUp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    toast({
                        title: "An error occurred. Please Check all your fields",
                        description: "Unable to create your account.",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                    });
                } else {
                    toast({
                        title: "Account created.",
                        description: "We've created your account for you.",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setRegistering(false);
    };

     return(
      <div class="setup">
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Create Account</Components.Title>
                     <Components.Input type='text' placeholder='Name' ref={name} />
                     <Components.Input type='email' placeholder='Email' ref={email}/>
                     <Components.Input type='password' placeholder='Password'  ref={password}/>
                     <Components.Button  onClick={handleRegister}
                        isLoading={registering}
                        loadingText="Registering">Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Sign in</Components.Title>
                      <Components.Input type='email' placeholder='Email' ref={email} />
                      <Components.Input type='password' placeholder='Password' ref={password}/>
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button onClick={handleLogin}>Sign In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         To keep connected with us please login with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Hello, Friend!</Components.Title>
                       <Components.Paragraph>
                           Enter Your personal details and start journey with us
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Sigin Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
         </div>
     )
}

export default Login;