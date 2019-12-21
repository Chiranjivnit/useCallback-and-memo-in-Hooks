import React from 'react';

const Count = ({ text, Count }) => {
 console.log('text',text)

    return (
        <div>
            <h2>Text {text} {Count}</h2>
        </div>
    )
}
export default Count;