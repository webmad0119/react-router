import React from "react";

const BoilingVerdict = ({celsius}) => {
if (celsius >= 100) return (<h3 style={{color: "green"}}>It is boiling at {celsius} degrees</h3>)
    else return (<h3 style={{color: "red"}}>It is not boiling at {celsius} degrees</h3>)
}

export default BoilingVerdict;