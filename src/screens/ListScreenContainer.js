import React from 'react';
import { connect } from 'react-redux';
import { load } from '../redux/modules/albums';
import ListScreen from './ListScreen';

const mapStateToProps = (state) => {
  return {
    albums: (state.albums && state.albums.items) || [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadAlbums: () => dispatch(load()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
