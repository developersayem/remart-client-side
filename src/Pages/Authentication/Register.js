import React from 'react';
import { Button, Card, Label, TextInput } from 'flowbite-react';


const Register = () => {
    return (
        <div className="max-w-sm container mt-5 m-auto">
            <Card>
                <h1 className='text-3xl font-bold'>Register</h1>
                <form className="flex flex-col gap-4">
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
                            required={true}
                        />
                    </div>
                    <div className="flex justify-start">
                        <Label
                            htmlFor="accounttype"
                            value="You Want to !"
                        />
                    </div>
                    <div className='flex justify-evenly'>
                        <div class="flex items-center">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required />
                            <label for="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Buy</label>
                        </div>
                        <div className="divide font-semibold text-sm">OR</div>
                        <div class="flex items-center">
                            <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required />
                            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sell</label>
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