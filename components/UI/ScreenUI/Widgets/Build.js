import styles from "./Build.module.scss";
import { useStore } from "@/store/Store";

const Build = () => {
  const {
    enterAddMode,
    leaveAddMode,
    placeBuilding,
    isBuildActive,
    setBuildState,
    ownedBuildings,
    listBuild,
  } = useStore();

  const clickBuild = () => {
    if (placeBuilding.isAdding) leaveAddMode();
    else enterAddMode();
  };

  return (
    <div
      className={styles.build}
      onClick={() => {
        setBuildState(!isBuildActive);
      }}
    >
      <div className={`${styles.badge}`}>
        <span>&#xe901;</span>
        <div className={styles.playerCenter}>
          &#xe901;
          <div className={styles.playerContent}>
            <div>
              <img
                src="/images/Hammer.webp"
                width="77"
                height="73"
                alt="addBuilding"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <ul
        className={`${styles.buildingList} ${
          isBuildActive ? styles.listShow : styles.listHidden
        }`}
      >
        {ownedBuildings.map((building) => (
          <li
            className={`${styles.listItem} `}
            key={building.id}
            onClick={(event) => {
              event.stopPropagation();
              clickBuild();
            }}
          >
            <h5>Type:{building.type}</h5>
            <span>Id:{building.id}</span>
            <img src="/images/render.png" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Build;
