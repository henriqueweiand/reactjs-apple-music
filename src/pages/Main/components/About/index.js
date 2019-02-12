import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Loading from '~/components/Loading';
import Description from '~/components/Description';
import Grid from '~/components/Grid';
import List from '~/components/List';
import Hidden from '~/components/Hidden';
import Bar from '~/components/Bar';

import ListDataStruct from '../ListDataStruct';

import { Container, Title, ButtonSpace, ListSpace } from './styles';
import { Button } from '~/styles/components';

const About = ({ artist: { data, loading } }) => (
  <Container>
    <Title>
      {
        loading
          ? <Loading />
          : data.artistName
      }
    </Title>

    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
      wrap="wrap"
    >
      <Grid desktop="65" mobile="100">
        {
          loading
            ? <Loading />
            : <Description data={data.description} />
        }
      </Grid>
      <Grid desktop="30" mobile="100">
        {
          loading
            ? <Loading />
            : (
              <List
                component={ListDataStruct}
                data={data.dataList}
              >
                <Hidden to="desktop">
                  <Button styles={ButtonSpace}>
                    Listen on
                    {' '}
                    <b>Apple Music</b>
                  </Button>
                </Hidden>
              </List>
            )
        }

        <Hidden to="desktop">
          <Bar styles={ListSpace} />
        </Hidden>
      </Grid>
    </Grid>
  </Container>
);

About.propTypes = {
  artist: PropTypes.shape({
    data: PropTypes.shape({}),
    loading: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => ({
  artist: state.artist,
});

export default connect(mapStateToProps)(About);
