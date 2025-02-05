import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from '../partials/Nav';
import Gallery from './views/Gallery';
import Album from '../partials/Album';
import * as actions from '../../store/modules/photos';

class Mainlayout extends React.Component {
    componentDidMount() {
        const { getAllPhotosStatus } = this.props;

        if (!getAllPhotosStatus) {
            this.props.dispatch(actions.getAllPhotos());
        }
    }

    render() {
        return (
            <div className="layout-container">
                <Nav />
                <Switch>
                    <Route path="/favorites">
                        <Album isFavorites />
                    </Route>
                    <Route path="/albums" component={Gallery} />
                    <Route path="/">
                        <Redirect to="/albums" />
                    </Route>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    getAllPhotosStatus: state.status?.getAllPhotos?.status
});
export default connect(mapStateToProps)(Mainlayout);
