import {Employer} from 'entities/Employer';

interface Props {
  employer: Employer
}

export function EmployerListItem(props: Props) {
  const {employer} = props;

  console.log(employer);

  return (
    <h1>{employer.title}</h1>
  );
}
