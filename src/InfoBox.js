export default function InfoBox({ children, className }) {
  return (
    <div className={"flex py-8 px-10 bg-gray-backgroundLight " + className}>
      {children}
    </div>
  )
}