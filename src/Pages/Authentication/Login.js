import React from 'react';
import { Button, Card, Label, TextInput } from 'flowbite-react';


const Login = () => {


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
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
                            placeholder="name@flowbite.com"
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
                            id="password1"
                            type="password"
                            name='password'
                            required={true}
                        />
                    </div>
                    <Button type="submit" gradientMonochrome="info">
                        Submit
                    </Button>
                    <div className="divide font-semibold">OR</div>
                    <Button type="submit" gradientMonochrome="info">
                        Google
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default Login;