import React from 'react';

const Rainbow = (WrappedComponent) => {
    
    const colours = ['red', 'pink', 'orange', 'black', 'yellow'];
    const randomColour = colours[Math.floor(Math.random() * 5)]; 
    const className = randomColour + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow;