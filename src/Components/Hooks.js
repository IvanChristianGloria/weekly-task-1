import React, { useState } from 'react'
import RandomBg from './RandomBg'

const Hooks = () => {
    const [emp_list, set_emp_list] = useState([
        {
        id: 1,
        name: 'Steve Jobs',
        salary: '$23,000',
        },
        {
        id: 2,
        name: 'Ivan',
        salary: '$50,000',
        },
        {
        id: 3,
        name: 'Mark Zuckerberg',
        salary: '$25,000',
        },
    ])

    const update_data = () => {
        let emp_list_copy = [...emp_list]
        emp_list_copy[1].name = 'Ivan Christian Gloria'
        emp_list_copy[1].salary = '$1,000,000'
        set_emp_list(emp_list_copy)
    }

    return (
        <div className='container pt-5'>
            <div className='pt-3 text-white pb-2 h-100'>
                <h5></h5>
                    {emp_list.map(({id, name, salary}) => 
                        <React.Fragment>
                            <p><h5 key={id}>{name}</h5></p>
                            <p>Salary: {salary}</p>
                        </React.Fragment>
                    )}
                <button class='btn btn-primary' onClick={update_data}>Update</button>
            </div>
        </div>
    )
}

export default RandomBg(Hooks)