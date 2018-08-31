import React from 'react';

const InfoCard = (props) => {
    
    return (
        <div >
            <h3>ssn: {props.ssn}</h3>
            <h3>mothersMaidenName: {props.mothersMaidenName}</h3>
            <h3>firstPet: {props.firstPet}</h3>
        </div>
    );
};

export default InfoCard;