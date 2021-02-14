import React from 'react';
import {} from "react-router-dom";

class Error extends React.Component {
    render() {
        return (
          <div className="Error">
            <h1>ERROR</h1>
            <h2>We don't have data on the country you're looking for.</h2>
          </div>
        );
    }
}

export default Error;
