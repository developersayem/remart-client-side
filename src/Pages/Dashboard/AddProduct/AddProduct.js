import { Button, Label, Spinner, Textarea, TextInput } from 'flowbite-react';
import React, { useState, useContext } from 'react';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/UserContext';


const AddProduct = () => {
    const Navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const { user } = useContext(AuthContext);
    const time = new Date();
    const today = time.toLocaleTimeString();
    const date = format(time, "PP")
    const timeDate = `${date}-${today}`


    const handeladdProducts = (event) => {
        event.preventDefault();
        const form = event.target;
        const model = form.model.value;
        const edition = form.edition.value;
        const category = form.category.value;
        let category_id = form.category_id.value;
        const description = form.description.value;
        const location = form.location.value;
        const resale_price = form.resale_price.value;
        const original_price = form.original_price.value;
        const seller_name = user.displayName;
        const seller_email = user.email;
        const seeler_number = form.seeler_number.value;
        const posttime = timeDate;
        const img = form.img.value;
        let seller_verified;
        const years_of_used = form.years_of_used.value;
        const Conditions_type = form.conditions_type.value;
        const product = {
            model, edition, seller_email, img, category, category_id, description, location, resale_price, original_price, seller_name, seeler_number, posttime, years_of_used, Conditions_type, seller_verified
        }
        setLoading(true)

        fetch("https://assainment-12.vercel.app/product", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                Navigate('/dashboard/myproducts');
                setLoading(false);
                toast.success("Product Add Successfully")
            })
    }


    return (
        <div className='container mx-auto ml-5 mt-5 lg:ml-10 lg:mt-16'>
            <form
                onSubmit={handeladdProducts}
                className="flex flex-col gap-4 ">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="model"
                                value="Phone Model"
                            />
                        </div>
                        <TextInput
                            id="PhoneModel"
                            type="text"
                            placeholder="Iphone 14 pro"
                            required={true}
                            shadow={true}
                            name="model"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="editions"
                                value="Editions"
                            />
                        </div>
                        <TextInput
                            id="editions"
                            type="text"
                            name='edition'
                            placeholder='12/256'
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="img"
                                value="Image URL"
                            />
                        </div>
                        <TextInput
                            id="img"
                            type="text"
                            name='img'
                            placeholder='URL'
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="category"
                                value="Category"
                            />
                        </div>
                        <TextInput
                            id="category"
                            type="text"
                            name='category'
                            placeholder='Flagship'
                            required={true}
                            shadow={true}
                        />
                    </div>
                    {/* <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="sellername"
                                value="Seller Name"
                            />
                        </div>
                        <TextInput
                            id="sellername"
                            type="text"
                            placeholder="jhon wick"
                            required={true}
                            shadow={true}
                            name="sellername"
                        />
                    </div> */}
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="seller_name"
                                value="Seller Number"
                            />
                        </div>
                        <TextInput
                            id="seller_name"
                            type="number"
                            name='seeler_number'
                            placeholder="0123456789"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="resellprice"
                                value="Resell Price"
                            />
                        </div>
                        <TextInput
                            id="resellprice"
                            type="number"
                            placeholder="50,0000"
                            required={true}
                            name='resale_price'
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="originalprice"
                                value="Original Price"
                            />
                        </div>
                        <TextInput
                            id="originalprice"
                            type="number"
                            placeholder="50,0000"
                            required={true}
                            name='original_price'
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="yearofused"
                                value="Year's of Used"
                            />
                        </div>
                        <TextInput
                            id="yearofused"
                            type="number"
                            name='years_of_used'
                            placeholder="00"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="location"
                                value="Location"
                            />
                        </div>
                        <TextInput
                            id="location"
                            type="text"
                            placeholder='Dhaka,Bangladesh'
                            name='location'
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div className='col-span-3'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="description"
                                value="Description"
                            />
                        </div>
                        <Textarea
                            id="description"
                            type="description"
                            placeholder="Description"
                            name='description'
                            required={true}
                            shadow={true}
                        />
                    </div>
                </div>
                <div>
                    <div className='flex justify-evenly'>
                        <p className='text-center text-sm mb-2'>Category :</p>
                        <div className="flex items-center">
                            <input defaultChecked={true} id="default-radio-2" type="radio" value="02" name="category_id" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required />
                            <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Flagship</label>
                        </div>
                        <div className="flex items-center">
                            <input id="default-radio-1" type="radio" value="01" name="category_id" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required />
                            <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Budget</label>
                        </div>
                        <div className="flex items-center">
                            <input id="default-radio-1" type="radio" value="03" name="category_id" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required />
                            <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gaming</label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-evenly'>
                        <p className='text-center text-sm mb-2'>Condition :</p>
                        <div className="flex items-center">
                            <input defaultChecked={true} id="default-radio-2" type="radio" value="excellent" name="conditions_type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required />
                            <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Excellent</label>
                        </div>
                        <div className="flex items-center">
                            <input id="default-radio-1" type="radio" value="good" name="conditions_type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required />
                            <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Good</label>
                        </div>
                        <div className="flex items-center">
                            <input id="default-radio-1" type="radio" value="fair" name="conditions_type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required />
                            <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fair</label>
                        </div>
                    </div>
                </div>
                {
                    loading ? <Button outline={true}>
                        <div className="mr-3">
                            <Spinner
                                size="sm"
                                light={true}
                            />
                        </div>
                        Loading ...
                    </Button> :
                        <Button type="submit" gradientMonochrome='info' >
                            Submit
                        </Button>
                }
            </form>
        </div>
    );
};

export default AddProduct;