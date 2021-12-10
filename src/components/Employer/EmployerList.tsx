import {Employer} from 'entities/Employer';
import {EmployerListItem} from 'components/Employer/EmployerListItem';

interface Props {
  employers: Employer[]
  isLoading: boolean
}

export function EmployerList(props: Props) {
  const {employers, isLoading} = props;

  return !isLoading && employers.map((employer) => <EmployerListItem key={employer.id} employer={employer} />);
}
