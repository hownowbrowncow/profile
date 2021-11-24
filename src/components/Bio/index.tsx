import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

interface Bio {
  id: string
  displayName: string
  title: string
  description: string
  phone: string
}
interface Props {
  bio: Bio
}

const Bio = (props: Props) => {
  console.log('bio component', props);

  return (
    <Grid container spacing={0}>
      <Grid item md={6}>
        <Typography variant='h4'>Nick Coffey</Typography>
      </Grid>
      <Grid container item md={6} direction='row' justifyContent='flex-end' alignItems='flex-start'>
        <Typography variant='h4'>Sr. Software Engineer</Typography>
      </Grid>
    </Grid>
  );
};

export default Bio;
