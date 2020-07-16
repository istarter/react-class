import React from 'react';

function Child(props) {
    const {cityArray} = this.props;
    console.log(cityArray);

    return (
      
        <div>
            <ul>
                {cityArray.map(city => <li key={city}>{city}</li>)}
            </ul>
            
        </div>
    )
}

export default Child
