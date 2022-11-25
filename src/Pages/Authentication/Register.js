import React from 'react';
import { Button, Card, Label, TextInput } from 'flowbite-react';


const Register = () => {
    const handelRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const option = form.defaultRadio.value;
        console.log(name, email, password, option)
    }


    return (
        <div className="max-w-sm container mt-5 m-auto">
            <Card>
                <h1 className='text-3xl font-bold'>Register</h1>
                <form onSubmit={handelRegister} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 flex justify-start">
                            <Label
                                htmlFor="Name"
                                value="Your Name"
                            />
                        </div>
                        <TextInput
                            id="name"
                            type="text"
                            name='name'
                            placeholder="flowbite"
                            required={true}
                        />
                    </div>
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
                            id="password1"
                            type="password"
                            name='password'
                            required={true}
                        />
                    </div>
                    <div className="flex justify-start">
                        <Label
                            htmlFor="accounttype"
                            value="Options!"
                        />
                    </div>
                    <div className='flex justify-evenly'>
                        <div className="flex items-center">
                            <input defaultChecked={true} id="default-radio-2" type="radio" value="buy" name="defaultRadio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required />
                            <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Buy</label>
                        </div>

                        <div className="divide font-semibold text-sm">OR</div>
                        <div className="flex items-center">
                            <input id="default-radio-1" type="radio" value="sell" name="defaultRadio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required />
                            <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sell</label>
                        </div>
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

export default Register;