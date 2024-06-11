import Heading1 from "../../_components/elements/H1";
import LeadTxt from "../../_components/elements/LeadTxt";

export default function Page() {
  const headerTxt = "Prosjekter";
  const leadTxt = "Mine prosjekter...";

  return (
    <>
      <Heading1 headerTxt={headerTxt} />
      <LeadTxt txt={leadTxt} />
    </>
  );
}
