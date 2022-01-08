import PageLayout from './PageLayout'
import HoverSelector from './HoverSelector';
import InfoBox from './InfoBox';
import { useParams } from 'react-router-dom';

export default function BondRedeem() {
  const { bondName } = useParams();

  return (
    <PageLayout>
      <InfoBox className={"flex-col w-info-box justify-center items-center space-y-2"}>
        <div>Claimable Rewards</div>
        <div className='text-sm'>0.2108 BTCA</div>
        <button className="bg-gray-backgroundDark text-white rounded-md px-12 py-2 mt-4">
          Claim
        </button>
      </InfoBox>

      <InfoBox className="my-4 justify-center w-info-box flex-col items-center">
        <div className="flex justify-between w-info-box-inner">
          <div>Pending Rewards</div>
          <div>0.0891 BTCA</div>
        </div>

        <div className="flex justify-between w-info-box-inner">
          <div>Time Until Fully Vested</div>
          <div>3 Days, 8 Hours, 42 Mins</div>
        </div>
      </InfoBox>

      <InfoBox>
        <HoverSelector active="true" to={`/bonds/${bondName}`}>Back</HoverSelector>
      </InfoBox>
    </PageLayout>
  )
}