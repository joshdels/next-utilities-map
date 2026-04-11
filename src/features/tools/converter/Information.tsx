import styles from "./Information.module.css";
import "@/shared/styles/wrappers.css";

export default function Information() {
  return (
    <div className="page-wrapper-secondary">
      <div className="page-wrapper-grid">
        <div className={styles["information-container"]}>
          <div>
            <h1>DXF to Geopackage Converter</h1>
            <p>
              Converts your DXF CAD files to a useable GIS Geopackage. No need
              to download any software. We do the heavy lifting while you focus
              on whats ahead.
            </p>
          </div>
          <div className={styles["information-context"]}>
            <span>convert</span>
            <button>DXF</button>
            <span>to</span>
            <button>GPKG</button>
          </div>
        </div>
      </div>
    </div>
  );
}
