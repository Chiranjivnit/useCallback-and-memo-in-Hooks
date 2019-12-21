import React, { useState, useCallback } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

const Profile = () => {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(25000);

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1)
    },[salary])
    return (
        <div>
            <Title />
            <Count text="Age" Count={age} />
            <Count text="Salary" Count={salary} />
            <Button incrementAge={incrementAge}
                incrementSalary={incrementSalary}
            />

        </div>
    )
}
export default Profile;

// WHAT !!!

// useCallback is a hook that will return a memoized version of the callback function
// that only changes if one of the dependences has changed.

//WHY ?

//it is useful when passing callbacks to optimized child components that rely on reference
// equality to prevent unnecessary renders.

//HOW ???
// 1 import useCallback from react
// 2 use it, where ever we have custome functions like line no. 10 and 14.
