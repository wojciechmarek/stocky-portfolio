import {
  UserDetailsSection,
  UserDetailsSectionProps,
} from "../../../molecules/profile";

export type UserJumbotronProps = {
  userDetails: UserDetailsSectionProps;
};

export const UserJumbotron = (props: UserJumbotronProps) => {
  const { userDetails } = props;

  return (
    <div>
      <UserDetailsSection {...userDetails} />
    </div>
  );
};
