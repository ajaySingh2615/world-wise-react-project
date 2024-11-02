import Map from "../../components/Map/Map.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
