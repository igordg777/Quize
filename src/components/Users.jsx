import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import Exel from './exel-export/Exel'

function Users() {
    // Вычисления

    const [data, setData] = useState([])
    const randomAge = (min, max) => {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => {
                for (let i = 0; i < res.length; i++) {
                    let ageUser = randomAge(10, 50)
                    res[i].age = ageUser
                }
                console.log(res)
                setData(res)
            })
    }, [])

    const columns = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Возраст',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Телефон',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Сайт',
            dataIndex: 'website',
            key: 'website',
        }
    ]

    return (
        <div>

            <Table dataSource={data} columns={columns} />
            <Exel itedUsers={data} myColumns={[
                { field: 'name', minWidth: 200 },
                { field: 'age', minWidth: 200 },
                { field: 'phone', minWidth: 200 },
                { field: 'website', minWidth: 200 },
            ]} />
        </div>
    )
}

export default Users;