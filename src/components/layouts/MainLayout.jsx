import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import * as actions from '../../store/modules/photos';
import Nav from '../partials/Nav';

class Mainlayout extends React.Component {
    componentDidMount() {
        this.props.dispatch(actions.getAllPhotos());
    }

    render() {
        return (
            <div className="layout-container">
                <Nav />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    getAllPhotosStatus: state.status?.getAllPhotos?.status
})
export default connect(mapStateToProps)(Mainlayout);
