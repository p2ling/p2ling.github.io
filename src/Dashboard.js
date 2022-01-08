import PageLayout from './PageLayout'
import InfoBox from "./InfoBox";
import dialogues from './models/dialogues';
import Dialogue from './Dialogue';

function DashboardText(props) {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="mb-1">{props.title}</div>
      <div className="text-sm">{props.primaryValue}</div>
      {props.secondaryValue ? <div className="text-gray-600 text-sm">{props.secondaryValue}</div> : []}
    </div>
  )
}

DashboardText.defaultProps = {
  title: "",
  primaryValue: "",
  secondaryValue: undefined,
}

export default function Dashboard() {
  const dialogue = dialogues['dashboard']
  return (
    <PageLayout>
      <InfoBox className="justify-between w-info-box">
        <Dialogue persona={dialogue.persona} message={dialogue.message} />
        <DashboardText title="Market Cap" primaryValue="32.2518 BTC" secondaryValue="$3,189,582" />
        <DashboardText title="APY" primaryValue="47.92%" />
        <DashboardText title="Index" primaryValue="1.85" />
        <DashboardText title="Treasury" primaryValue="28.2518 BTC" secondaryValue="28.2518 BTC" />
      </InfoBox>

      <div className="flex space-x-8 my-4">
        <InfoBox className="mb-8 w-1/2 flex-col items-center justify-center space-y-6">
          <DashboardText title="BTCA1 Price" primaryValue="1.318 BTC" secondaryValue="$89,582" />
          <DashboardText title="BTCA2 Price" primaryValue="1.618 BTC" secondaryValue="$169,582" />
          <DashboardText title="BTCA3 Price" primaryValue="2.318 BTC" secondaryValue="$209,582" />
        </InfoBox>

        <InfoBox className="mb-8 w-1/2 flex-col items-center justify-center space-y-6">
          <DashboardText title="wBTC Price" primaryValue="1.08 BTC" secondaryValue="$39,582" />
          <DashboardText title="Top Bond" primaryValue="Green Bond" secondaryValue="+13.2%" />
          <DashboardText title="Top Pool" primaryValue="wrBTC-USDC" secondaryValue="+285.2%" />
        </InfoBox>
      </div>
    </PageLayout>
  )
}