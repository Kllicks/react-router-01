import React from 'react';

function OneDog(props) {
    
    const allToys = props.toys;
    const dogName = props.match.params.dogName;
    const myToys = allToys[dogName];
    
    return (
        <div>
            <h2>
                {props.match.params.dogName}
            </h2>
            <ul>
                {myToys.map((toy) => {
                    return <li>{toy}</li>
                })}
            </ul>
        </div>
    );
};

export default OneDog;