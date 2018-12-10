import React from 'react';

function OneCat(props) {
    return (
        <h2>
            {props.match.params.catName}
        </h2>
    );
};

export default OneCat;