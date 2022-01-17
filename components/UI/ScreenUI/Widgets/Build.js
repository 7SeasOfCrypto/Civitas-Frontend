import styles from "./Build.module.scss";
import { useStore } from "@/store/Store";

const Build = () => {
  const {
    
    moveMode,
    rotateMode,
    
    isBuildActive,
    setBuildState,
    ownedBuildings,
    
  } = useStore();
  const {enterMove,exitMoveMode,
    exitRotateMode,}= useStore(state=>state.actions)

  const clickBuild = (e) => {
    if (moveMode.isActive || rotateMode.isActive)
      {
          exitMoveMode()
          exitRotateMode()


      }
      else 
      {
        enterMove({BuildId:e});
      }
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
        {ownedBuildings.filter(value=>value.isPlaced===false &&value.level>0).map((building) => (
          <li
            className={`${styles.listItem} `}
            key={building.BuildId}
            onClick={(event) => {
              event.stopPropagation();
              
              clickBuild(building.BuildId);
            }}
          >
            <h5>{"⭐".repeat(building.level)}</h5>
            <span>{building.name}</span>
            <img src="/images/render.png" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Build;

