import React from 'react';
import '../../styles/alerts.css';

class success extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            status: this.props.aState
        }
    }
    render()
    {
        return (
           
            <div className={this.props.aState.status ? 'alert active' : 'alert'}>
                <div className={this.props.aState.type ? 'success' : 'error'} onClick={this.props.aState.disable}>
                <span>{this.props.aState.msg}</span>
                </div>
            </div>
        );
    }
}


export default success;