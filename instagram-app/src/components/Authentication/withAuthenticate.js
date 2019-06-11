import React from 'react';

const withAuthenticate = InnerComponent => 
    class extends React.Component{
        render(){
            return <InnerComponent />
        } 
    }


export default withAuthenticate; 