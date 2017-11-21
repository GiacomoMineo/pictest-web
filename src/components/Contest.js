import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

class Contest extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={24}>
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
                aaaaa
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Contest;