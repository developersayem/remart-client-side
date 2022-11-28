import { Table } from 'flowbite-react';
import React from 'react';

const OrdersTb = ({ item }) => {

    const { place, name, modelName, price } = item;
    return (
        <div className='w-full min-w-screen'>
            <Table hoverable={true}>
                <Table.Head>
                    <Table.HeadCell>
                        Product name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Place
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Price
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {modelName}
                        </Table.Cell>
                        <Table.Cell className='text-red-600 capitalize'>
                            {name}
                        </Table.Cell>
                        <Table.Cell>
                            {place}
                        </Table.Cell>
                        <Table.Cell>
                            {price}
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
};

export default OrdersTb;