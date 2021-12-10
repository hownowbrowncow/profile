import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

import {Bio} from 'entities/Bio';

interface Props {
  bio: Bio
  isLoading: boolean
}

export function BioViewSkeleton() {
  return (
    <Grid container spacing={0}>
      <Grid item md={6}>
        <Skeleton width='50%' />
      </Grid>
      <Grid container item md={6}>
        <Grid item md={12} display='flex' justifyContent='right'>
          <Skeleton width='60%' />
        </Grid>
        <Grid item md={12} display='flex' flexDirection='row' justifyContent='end'>
          <Skeleton width='40%' />
        </Grid>
      </Grid>
      <Grid item md={12}>
        <Skeleton variant='rectangular' height={50} />
      </Grid>
    </Grid>
  );
}

export function BioView(props: Props) {
  const {bio, isLoading} = props;


  return isLoading ? <BioViewSkeleton /> : (
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
}
