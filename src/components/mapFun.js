import React from 'react'


function mapFun() {
    const name = {name};
  
       const cityArray = ["karachi", "Islamabad", "Lahore", "Quitta"];
    
       const shortListedCities = cityArray.filter(city => city.length > 6)
    return (
        <div>
            <ul>
                 {/* {cityArray.map(city => <li key={city}>{city}</li>)}  */}
               {shortListedCities.map(city => <li key={city}>{city}</li>)}
                
            </ul>
            
        </div>
    )
   
}

export default mapFun
