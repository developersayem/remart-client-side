import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/UserContext';
import { FaTimes } from "react-icons/fa";
import { Button } from 'flowbite-react';
import toast from 'react-hot-toast';



const ProductModal = ({ showModal, setShowModal, modalData, setModlaData, }) => {
    const { user } = useContext(AuthContext)
    const { resale_price, model, } = modalData;


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const modelName = form.modelName.value;
        const price = form.price.value;
        const place = form.place.value;
        const phone = form.phone.value;
        const booking = {
            name, email, modelName, price, place, phone,
        }
        console.log(booking)

        fetch("https://assainment-12.vercel.app/booked", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("purchase Successfully")
                // MODAL CLOSE
                setModlaData(null)
                console.log(booking)
            })
    }

    return (
        <div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Modal Title
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="text-stone-900 h-4 w-6 text-2xl block outline-none focus:outline-none">
                                            <FaTimes />
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                {/* onSubmit={handleSubmit} */}
                                <div className='p-16 pt-0 my-5 pb-0'>

                                    <form onSubmit={handleSubmit}>
                                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                                            <div>
                                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                                <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='name' defaultValue={user?.displayName} placeholder="John" required disabled />
                                            </div>
                                            <div>
                                                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='email' defaultValue={user?.email} placeholder="Doe" required disabled />
                                            </div>
                                            <div>
                                                <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Model Name</label>
                                                <input type="text" id="model" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='modelName' defaultValue={model} placeholder="Flowbite" required disabled />
                                            </div>
                                            <div>
                                                <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price -Tk</label>
                                                <input type="text" id="model" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='price' defaultValue={resale_price} placeholder="Flowbite" required disabled />
                                            </div>
                                            <div>
                                                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                                <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='phone' placeholder="123-45-678" required />
                                            </div>
                                            <div>
                                                <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Meeting Place URL</label>
                                                <input type="address" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='place' placeholder="Dhaks,Bangladesh" required />
                                            </div>
                                        </div>
                                        <div className='flex justify-center mt-5'>
                                            <Button gradientMonochrome="info" type="submit" className="btn btn-block">Submit</Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}

        </div>
    );
};

export default ProductModal;