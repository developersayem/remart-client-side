import React, { useContext } from 'react';
import { Button, Card, Label, TextInput } from 'flowbite-react';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../../Contexts/UserContext';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from "react-router-dom";



const Login = () => {
    useTitle("Log In");

    const Navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const { LogInUser } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        LogInUser(email, password)
            .then(result => {
                toast.success("logged in successfully");
                form.reset();
                const user = result.user
                const currentUser = { email: user.email }
                // jwt token
                fetch("https://assainment-12.vercel.app/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(currentUser),
                })
                    .then(res => res.json())
                    .then(data => {
                        //set jwt to local storage 
                        localStorage.setItem("token", data.token)
                    })
                Navigate(from, { replace: true });
            })
            .catch(err => toast.error(err.message));
    }


    const handelGoogle = () => {
        toast("google")
        console.log("handelGoogle")
    }



    return (
        <div className="max-w-sm container mt-20 m-auto">
            <Card>
                <h1 className='text-3xl font-bold'>Log In</h1>
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 flex justify-start">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            name='email'
                            placeholder="name@example.com"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 flex justify-start">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            autoComplete=''
                            id="password1"
                            type="password"
                            name='password'
                            required={true}
                        />
                    </div>
                    <Button type="submit" gradientMonochrome="info">
                        Submit
                    </Button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <Link to="/register" className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                    </div>
                </form>
                <div className="divide font-semibold">OR</div>
                <Button onClick={handelGoogle} gradientMonochrome="info">
                    Google
                </Button>
            </Card>
        </div>
    );
};

export default Login;