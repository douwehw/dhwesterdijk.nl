import { Tooltip } from "react-tippy";

function ExperienceIcon({ name, icon }) {
  return (
    <li className="flex p-2">
      <Tooltip
        title={name}
        animation="shift"
        duration="150"
        delay="0"
        position="bottom"
        distance="5"
        theme="dark"
        inertia="true"
        useContext="true"
      >
        <span>{icon({ className: "h-6 w-6" })}</span>
      </Tooltip>
    </li>
  );
}

export default ExperienceIcon;
