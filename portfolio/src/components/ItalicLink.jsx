import { Tooltip } from "react-tippy";

function ItalicLink({ children, href, title }) {
  return (
    <Tooltip title={title} distance="0">
      <a href={href} target="_blank" className="italic hover:underline text-gray-300">
        {children}
      </a>
    </Tooltip>
  );
}

export default ItalicLink;
