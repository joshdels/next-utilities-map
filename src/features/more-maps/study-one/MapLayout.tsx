import SideBar from "./Sidebar";
import MapStudyOne from "./Map";
import Navbar from "./Navbar";

export default function StudyOneLayout() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div>
          <MapStudyOne />
          <SideBar />
        </div>
      </div>
    </>
  );
}
