import InfoBox from "./InfoBox";
import TypeIt from "typeit-react"
import './Portrait.css'

export default function Dialogue({ persona, message }) {
  return (
    < div
      className="fixed right-12 bottom-4 pb-8 text-sm flex justify-center flex-col items-center"
      style={{ transform: "translateX(0%) translateY(0%)" }} >
      <InfoBox className="w-96 border-2 rounded-xl">
        <TypeIt
          options={{
            strings: message,
            speed: -30,
            waitUntilVisible: true,
            contentType: 'html'
          }}
          key={Math.random()}>
        </TypeIt>
      </InfoBox>
      <div className={`w-48 border-2 mb-2 mt-6 h-48 rounded-full flex items-center justify-center text-center portrait ${persona.toLowerCase()}`}></div>
      <div className="bg-gray-backgroundLight p-2">{persona}</div>
    </div >
  )
};