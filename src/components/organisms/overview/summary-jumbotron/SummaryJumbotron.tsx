import { DetailsButtonsSection, TotalMoneySection } from "../../../molecules";

export type SummaryJumbotronProps = {
  className: string;
};

export const SummaryJumbotron = (props: SummaryJumbotronProps) => {
  const { className } = props;

  return (
    <div className={`flex flex-col mx-3 p-3 items-center ${className}`}>
      <TotalMoneySection />
      <DetailsButtonsSection />
    </div>
  );
};
