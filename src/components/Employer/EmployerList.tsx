import {Employer} from 'entities/Employer';

interface Props {
  employers: Employer[]
  isLoading: boolean
}

export function EmployerList(props: Props) {
  const {employers} = props;
  console.log(employers);

  return <h1>Employer List</h1>;
}
