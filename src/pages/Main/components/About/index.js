import React from 'react';

import Description from '~/components/Description';
import Grid from '~/components/Grid';
import List from '~/components/List';
import Hidden from '~/components/Hidden';
import Bar from '~/components/Bar';

import ListDataStruct from '../ListDataStruct';

import { Container, Title, ButtonSpace, ListSpace } from './styles';
import { Button } from '~/styles/components';

const About = () => (
  <Container>
    <Title>Lil Wayne</Title>

    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
      wrap="wrap"
    >
      <Grid desktop="65" mobile="100">
        <Description />
      </Grid>
      <Grid desktop="30" mobile="100">
        <List
          component={ListDataStruct}
          data={[
            {
              key: 1,
              label: 'Origin',
              value: 'New Orleans, LA',
            },
            {
              key: 2,
              label: 'Genre',
              value: 'Hip-Hop/Rap',
            },
            {
              key: 3,
              label: 'Born',
              value: 'Set 27, 1982',
            },
          ]}
        >
          <Hidden to="desktop">
            <Button styles={ButtonSpace}>
              Listen on
              {' '}
              <b>Apple Music</b>
            </Button>
          </Hidden>
        </List>
        <Hidden to="desktop">
          <Bar styles={ListSpace} />
        </Hidden>
      </Grid>
    </Grid>
  </Container>
);

export default About;
