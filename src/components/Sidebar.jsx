import "./Sidebar.css";
import { LineStyle, Timeline,TrendingUp, PermIdentity, Storefront, AttachMoney, BarChart} from "@mui/icons-material";
import EventIcon from '@mui/icons-material/Event';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { Link } from "react-router-dom";

export default function Sidebar() {
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
            <Link to="/create" className="link">
            <li className="sidebarListItem active">
              <EventIcon className="sidebarIcon" />
              Event
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Admin</h3>
          <ul className="sidebarList">
            <Link to="/userlist" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Student
              </li>
            </Link>
            <Link to="/viewcomplaint" className="link">
              <li className="sidebarListItem">
                <FeedbackIcon className="sidebarIcon" />
                View Complaints
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}