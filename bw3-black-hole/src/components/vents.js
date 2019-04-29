import React from 'react';
import VentForm from './ventForm';

class Vents extends React.Component {
    // componentDidMount() {
    //     this.props.getData();
    // }

    render() {
        return (
            <div>
                <h1>Select an item</h1>
                <VentForm />
            </div>
        );
    };
};

export default Vents;