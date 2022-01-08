import PageLayout from './PageLayout'
import HoverSelector from './HoverSelector';
import InfoBox from './InfoBox';
import Dialogue from './Dialogue';
import dialogues from './models/dialogues'
import { useState } from 'react';

export default function InfoCenter() {
  const [dialogue, setDialogue] = useState(dialogues["info_center"])

  return (
    <PageLayout>
      <div className="flex flex-col space-y-6">
        <Dialogue key={dialogue} persona={dialogue.persona} message={dialogue.message} />
        <InfoBox className="flex-col w-info-box-inner">
          <button onClick={() => setDialogue(dialogues["info_center/bonds"])}>
            <HoverSelector active={true}>Bonds</HoverSelector>
          </button>

          <button onClick={() => setDialogue(dialogues["info_center/liquidity_pools"])}>
            <HoverSelector>Liquidity Pools</HoverSelector>
          </button>

          <button onClick={() => setDialogue(dialogues["info_center/swaps"])}>
            <HoverSelector>Swaps</HoverSelector>
          </button>

          <button onClick={() => setDialogue(dialogues["info_center/accumulators"])}>
            <HoverSelector>Accumulators</HoverSelector>
          </button>

          <button onClick={() => setDialogue(dialogues["info_center/connecting"])}>
            <HoverSelector>Connecting with Us</HoverSelector>
          </button>
        </InfoBox>
      </div>
    </PageLayout>
  )
};