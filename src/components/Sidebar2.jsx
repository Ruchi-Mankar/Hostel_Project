import "./Sidebar.css";
// import {
//   LineStyle,
//   Timeline,
//   TrendingUp,
//   PermIdentity,
//   Storefront,
//   AttachMoney,
//   BarChart,
//   MailOutline,
//   DynamicFeed,
//   ChatBubbleOutline,
//   WorkOutline,
//   Report,
// } from "@@mui/icons-material";

import { LineStyle, Timeline,TrendingUp, PermIdentity, Storefront, AttachMoney, BarChart} from "@mui/icons-material";
import EventIcon from '@mui/icons-material/Event';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import { Link } from "react-router-dom";

export default function Sidebar2() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Admin</h3>
          <ul className="sidebarList">
            <Link to="/rules" className="link">
              <li className="sidebarListItem">
                <SpeakerNotesIcon className="sidebarIcon" />
                Rules & Regulations
              </li>
            </Link>
            <Link to="/complaints " className="link">
              <li className="sidebarListItem">
                <LabelImportantIcon className="sidebarIcon" />
                Add Complaints
              </li>
            </Link>
            
          </ul>
        </div>
      </div>
    </div>
  );
}