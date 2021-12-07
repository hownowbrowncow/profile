import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import {Bio} from 'entities/Bio';

interface Props {
  bio: Bio
  isLoading: boolean
}

const BioComponent = (props: Props) => {
  const {bio, isLoading} = props;

  return !isLoading && (
    <Grid container spacing={0}>
      <Grid item md={6}>
        <Typography variant='h4'>{bio.displayName}</Typography>
      </Grid>
      <Grid container item md={6}>
        <Grid item md={12}>
          <Typography variant='h4' align='right'>{bio.title}</Typography>
        </Grid>
        <Grid item md={12} display='flex' flexDirection='row' justifyContent='end'>
          <Typography variant='overline'>{bio.email}</Typography>
          <Typography variant='overline'>{bio.phone}</Typography>
        </Grid>
      </Grid>
      <Grid item md={12}>
        <Typography variant='body1'>{bio.description}</Typography>
      </Grid>
    </Grid>
  );
};

export default BioComponent;
