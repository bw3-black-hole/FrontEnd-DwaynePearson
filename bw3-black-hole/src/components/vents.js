import React from 'react';
import VentForm from './VentForm';

class Vents extends React.Component {
    componentDidMount() {
        // this.props.getData();
    }

    render() {
        return (
            <div>
                <h1>What's going on in your world?</h1>
                <VentForm />
            </div>
        );
    };
};

export default Vents;