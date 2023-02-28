import React, {useState} from 'react'
import RandomBg from './RandomBg'
import _ from 'lodash'

const Home = () => {
    const search_people = [
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
        }
    ]
    const [result_one, set_result_one] = useState([])
    const [result_two, set_result_two] = useState([])
    const [result_three_1, set_result_three_1] = useState([])
    const [result_three_2, set_result_three_2] = useState([])
    const [search, set_search] = useState(search_people)

    const arrOne = [{
        id: 20,
        name: 'alex'
     
    }, {
        id: 30,
        name: 'alina'
    }]
     
    const arrTwo = [{
        id: 40,
        name: 'hello'
    }, {
        id: 30,
        name: 'world'
    }]

    const symmetric_result = () => {
        const result_one_copy = _.differenceBy(arrOne, arrTwo, _.id)
        set_result_one(result_one_copy)
    }

    const str = ['u', 'ec']
    
    const arr = [{
        storageVal: 'u',
        table: ['E', 'F']
    },{
        storageVal: 'data',
        table: ['E', 'F']
    }, {
        storageVal: 'ec',
        table: ['E']
    }]

    const table_result = () => {
        let result_two_copy = []
        arr.map(({ storageVal, table }) => {
            console.log(storageVal)
            if(str.includes(storageVal))
                result_two_copy = [...result_two_copy, table]
        })
        set_result_two(result_two_copy)
    }

    const a = [['E'], ['F']]
    const t = [['E', 'F'], [['F'], ['G']]]

    const flatten_result = () => {
        set_result_three_1(_.flattenDeep(a))
        set_result_three_2(_.flattenDeep(t))
    }

    return (
        <React.Fragment>
            <div className='container pt-5'>
                <div className='pt-3 text-white pb-2 h-100'>
                    <h4 className='mb-3'>Symmetric Differnce</h4>
                    <h5 className='mt-3'>Array 1</h5>
                    {arrOne.map(({ id, name }) => 
                        <React.Fragment key={id}>
                            <p className='mb-0'>{id} {name}</p>
                        </React.Fragment>
                    )}
                    <h5 className='mt-3'>Array 2</h5>
                    {arrTwo.map(({ id, name }) => 
                        <React.Fragment key={id}>
                            <p className='mb-0'>{id} {name}</p>
                        </React.Fragment>
                    )}
                    <h5 className='mt-3'>Result</h5>
                    {result_one.map(({ id, name }) => 
                        <React.Fragment key={id}>
                            <p className='mb-0'>{id} {name}</p>
                        </React.Fragment>
                    )}
                    <button className='btn btn-primary mt-3' onClick={symmetric_result}>Get Result</button>
                    
                    <h4 className='mb-3 mt-5'>Get All Tables</h4>
                    <h5 className='mt-3'>String</h5>
                    {str.map((e, i) => 
                        <React.Fragment key={i}>
                            <p className='mb-0'>{e}</p>
                        </React.Fragment>
                    )}
                    <h5 className='mt-3'>Array</h5>
                    {arr.map(({storageVal, table}, i) => 
                        <React.Fragment key={i}>
                            <p className='mb-0'>{storageVal}=
                            {JSON.stringify(table)}
                            </p>
                        </React.Fragment>
                    )}
                    <h5 className='mt-3'>Result</h5>
                    <p className='mb-0'>
                        {JSON.stringify(result_two)}
                    </p>
                    <button className='btn btn-primary mt-3' onClick={table_result}>Get Result</button>
                    <h4 className='mb-3 mt-5'>Flatten an Array</h4>
                    <p className='mb-0'>
                        {JSON.stringify(a)}
                    </p>
                    <p className='mb-0'>
                        {JSON.stringify(t)}
                    </p>
                    <h5 className='mt-3'>Results</h5>
                    <p className='mb-0'>
                        {JSON.stringify(result_three_1)}
                    </p>
                    <p className='mb-0'>
                        {JSON.stringify(result_three_2)}
                    </p>
                    <button className='btn btn-primary mt-3' onClick={flatten_result}>Get Result</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default RandomBg(Home)