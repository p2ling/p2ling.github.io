import { Link } from "react-router-dom";
export default function PageLayout({ children, className }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="rounded-2xl px-12 py-8 bg-gray-backgroundDark">
        <div className="flex justify-end py-2">
          <Link to="/" className="bg-gray-backgroundLight text-md px-4 py-2 flex items-center justify-center">esc</Link>
        </div>
        <div className={"mt-4 relative " + className}>
          {children}
        </div>
      </div>
    </div>
  )
}