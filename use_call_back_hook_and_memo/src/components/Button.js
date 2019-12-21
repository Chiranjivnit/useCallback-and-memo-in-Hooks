import React, { Children } from 'react';

const Button = ({incrementSalary,incrementAge}) => {
console.log('rendering',Children)
    return (
        <div>
            <h1>

                <button onClick={incrementSalary} >SalaryIncrement</button>
                <button onClick={incrementAge} >AgeIncrement</button>
            </h1>

        </div>
    )
}
export default  Button