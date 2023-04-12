import { Tooltip } from "react-tippy";

function ItalicLink({ children, href, title }) {
  return (
    <Tooltip title={title} distance="0">
      <a href={href} target="_blank" className="italic hover:underline text-white">
        {children}
      </a>
    </Tooltip>
  );
}

export default ItalicLink;
