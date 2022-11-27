import React, { useEffect, useState } from 'react';
import { BiSortAlt2 } from "react-icons/bi";

const Table = () => {
    const [tableData, setTableData] = useState();

    useEffect(() => {
        fetch('tableTestData.json')
            .then(res => res.json())
            .then(data => {
                setTableData(data)
            })
    }, [])

    // BiSortAlt2
    return (
        <div className='w-5/6 mx-auto'>
            <h2 className="text-5xl font-bold">Part 01</h2>
            <div className="overflow-x-auto w-full my-16">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name <button><BiSortAlt2 /></button> </th>
                            <th >City <button><BiSortAlt2 /></button></th>
                            <th>Email Address <button><BiSortAlt2 /></button></th>
                            <th>Joining Date <button><BiSortAlt2 /></button></th>
                            <th>Role <button><BiSortAlt2 /></button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData?.map((table, i) => <>
                                <tr key={i + 1}>
                                    <td>
                                        <div className="flex items-center ">
                                            <div className="avatar pr-6">
                                                <div className="w-12 rounded-full">
                                                    <img src="https://placeimg.com/192/192/people" alt=" " />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{table.person.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td> {table.city}</td>
                                    <td className='text-blue-600 underline'>{table.email}</td>
                                    <td>{table.joiningDate}</td>
                                    <td>{table.role}</td>

                                </tr>
                            </>
                            )
                        }
                    </tbody>

                </table>
            </div>

            <h2 className="text-5xl font-bold">Part 02</h2>
            <div className="overflow-x-auto w-full my-16">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name <button><BiSortAlt2 /></button> </th>

                            <th>Email Address</th>

                            <th>Role </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData?.map((table, i) => <>
                                <tr key={i + 1}>
                                    <td>
                                        <div className="flex items-center ">
                                            <div className="avatar pr-6">
                                                <div className="w-12 rounded-full">
                                                    <img src="https://placeimg.com/192/192/people" alt=" " />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{table.person.name}</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className='text-blue-600 underline'>{table.email}</td>

                                    <td>{table.role}</td>

                                </tr>
                            </>
                            )
                        }
                    </tbody>

                </table>
            </div>
            <div className="overflow-x-auto w-full  my-16">
                <table className="table w-full">
                    <thead>
                        <tr>


                            <th>Email Address</th>
                            <th>Joining Date <button><BiSortAlt2 /></button></th>
                            <th>Role <button><BiSortAlt2 /></button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData?.map((table, i) => <>
                                <tr key={i + 1}>
                                    <td className='text-blue-600 underline'>{table.email}</td>
                                    <td>{table.joiningDate}</td>
                                    <td>{table.role}</td>

                                </tr>
                            </>
                            )
                        }
                    </tbody>

                </table>
            </div>
            <div className="overflow-x-auto w-full my-16">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name </th>
                            <th >City <button><BiSortAlt2 /></button></th>
                            <th>Joining Date <button><BiSortAlt2 /></button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData?.map((table, i) => <>
                                <tr key={i + 1}>
                                    <td>
                                        <div className="flex items-center ">
                                            <div className="avatar pr-6">
                                                <div className="w-12 rounded-full">
                                                    <img src="https://placeimg.com/192/192/people" alt=" " />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{table.person.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td> {table.city}</td>
                                    <td>{table.joiningDate}</td>
                                </tr>
                            </>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Table;