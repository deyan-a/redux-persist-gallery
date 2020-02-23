import React from 'react';
import * as actions from '../../store/modules/photos';

class Mainlayout extends React.Component {
    componentDidMount() {
        this.props.disaptch(actions.getAllPhotos());
    }

    render() {
        return (
            <div>
                MainLayout
            </div>
        )
    }
}

export default Mainlayout;
