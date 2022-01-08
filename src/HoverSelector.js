import { ReactComponent as Arrow } from "./assets/arrow.svg";
import { Link } from "react-router-dom";

import "./HoverSelector.css"

export default function HoverSelector({ children, active, to }) {
  return (
    <Link to={to} className="flex items-center hover-selector cursor-pointer">
      <Arrow className={`w-8 ${active ? 'active' : ''} `} />
      {children}
    </Link>
  )
}

HoverSelector.defaultProps = {
  to: '',
  active: false,
}