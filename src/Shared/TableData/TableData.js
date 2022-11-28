import React from 'react';
import { Button, Table } from 'flowbite-react';
import { confirm } from 'react-confirm-box';
import toast from 'react-hot-toast';


const TableData = ({ data, index, refetch }) => {
    const { role, name, email, _id } = data;


    const handelDelete = (id) => { onClick(id); }
    const onClick = async (id) => {
        const result = await confirm("Are you sure?");
        if (result) {
            fetch(`https://assainment-12.vercel.app/user/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount === 1) {
                        toast.success("User deleted successfully");
                        refetch()
                    }
                });
        }
    };

    return (
        <Table hoverable={true}>
            <Table.Head>
                <Table.HeadCell className='text-center'>
                    Index
                </Table.HeadCell>
                <Table.HeadCell className='text-center'>
                    Name
                </Table.HeadCell>
                <Table.HeadCell className='text-center'>
                    Email
                </Table.HeadCell>
                <Table.HeadCell className='text-center'>
                    Role
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {index + 1}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {name}
                    </Table.Cell>
                    <Table.Cell className='text-red-600'>
                        {email}
                    </Table.Cell>
                    <Table.Cell className='capitalize'>
                        {role}
                    </Table.Cell>
                    <Table.Cell>
                        <Button
                            onClick={() => handelDelete(_id)}
                            size="xs"
                            color="failure"
                        >
                            Delete
                        </Button>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    );
};

export default TableData;