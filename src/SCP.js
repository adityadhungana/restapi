import React from 'react';

const SCP = ({Bruce}) =>
{
    return(
        <div>
            {
                Bruce.map(
                    (Bruce) => (
                        <div class="jumbotron">          
                        <h2>Item: {Bruce.title}</h2>
                        <h3>Class: {Bruce.class}</h3>
                        <h3>Containment</h3>
                        <p>{Bruce.containment}</p>
                        <h3>Description</h3>
                        <p>{Bruce.Description}</p>
                        </div>
                        
                       
                    )
                )
            }
        </div>
    )
};

export default SCP;