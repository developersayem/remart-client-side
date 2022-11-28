import React from 'react';
import { Button, Table } from 'flowbite-react';
import toast from 'react-hot-toast';
import { confirm } from "react-confirm-box";


const MyProductTb = ({ product, refetch }) => {
    const { status, model, edition, _id } = product;

    const handleSold = (id) => {
        const data = { status: "sold" };
        fetch(`http://localhost:5000/myproduct/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("Solded successfully")
                }
            });
        refetch()
        refetch()
    }
    const handleUnSold = (id) => {
        const data = { status: "unsold" };
        fetch(`http://localhost:5000/myproduct/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("Unsolded successfully")
                }
            });
        refetch()
    }
    const handleAdvertised = (id) => {
        const data = { advertised: "Advertised" };
        fetch(`http://localhost:5000/myproduct/advertised/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("Advertised successfully")
                }
            });
        refetch()
    }



    const onClick = async (id) => {
        const result = await confirm("Are you sure?");
        if (result) {
            fetch(`https://assainment-12.vercel.app/myproduct/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount === 1) {
                        toast.success("Product deleted successfully");
                        refetch()
                    }
                });
        }
        toast.error("You click No!");
    };

    const handleDelete = (id) => { onClick(id) }

    return (
        <div className='w-full min-w-screen'>
            <Table hoverable={true}>
                <Table.Head>
                    <Table.HeadCell>
                        Product name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Status
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Edition
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Action
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Delete
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Advertised
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {model}
                        </Table.Cell>
                        <Table.Cell className='text-red-600 capitalize'>
                            {status}
                        </Table.Cell>
                        <Table.Cell>
                            {edition}
                        </Table.Cell>
                        <Table.Cell>
                            {
                                status === "sold" ?
                                    <Button
                                        onClick={() => handleUnSold(_id)}
                                        gradientMonochrome="info"
                                        size="xs">
                                        unsold
                                    </Button>
                                    :
                                    <Button
                                        onClick={() => handleSold(_id)}
                                        gradientMonochrome="info"
                                        size="xs">
                                        sold
                                    </Button>
                            }
                        </Table.Cell>
                        <Table.Cell>
                            <Button
                                onClick={() => handleDelete(_id)}
                                size="xs"
                                color="failure"
                            >
                                Delete
                            </Button>
                        </Table.Cell>
                        <Table.Cell>
                            <Button
                                onClick={() => handleAdvertised(_id)}
                                size="xs"
                                gradientMonochrome="info"
                            >
                                Advertised
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
};

export default MyProductTb;