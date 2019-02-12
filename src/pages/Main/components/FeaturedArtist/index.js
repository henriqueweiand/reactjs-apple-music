import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Loading from '~/components/Loading';
import Grid from '~/components/Grid';

import { FeaturedArtistContent, Label, FeaturedArtistList, Item, List, ItemList } from './styles';

import { Creators as FeaturedActions } from '~/store/ducks/featured';

class FeaturedArtist extends Component {
  static propTypes = {
    getFeaturedRequest: PropTypes.func.isRequired,
    featured: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({})),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentWillMount() {
    const { getFeaturedRequest } = this.props;
    getFeaturedRequest();
  }

  handleFeatured = () => {
    const { featured: { data } } = this.props;

    return data.map(item => (
      <Grid
        container
        direction="column"
        alingItem="center"
        alingContent="center"
        styles={Item}
        key={item.key}
      >
        <List>
          <ItemList cover>
            <img src={item.cover} alt={item.autorName} />
          </ItemList>
          <ItemList autorName>
            {item.autorName}
          </ItemList>
          <ItemList category>
            {item.category}
          </ItemList>
        </List>
      </Grid>
    ));
  }

  render() {
    const { featured: { loading }} = this.props;

    return (
      <Grid direction="column" container styles={FeaturedArtistContent}>
        <Label>Featured Artists</Label>

        <Grid item container styles={FeaturedArtistList}>
          {
            loading
              ? <Loading />
              : this.handleFeatured()
          }
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  featured: state.featured,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...FeaturedActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedArtist);
