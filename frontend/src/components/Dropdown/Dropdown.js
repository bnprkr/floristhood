import { useState, useEffect } from "react";
import styles from "./Dropdown.module.css";

function Dropdown({ header, items }) {
  const [showMenu, toggleShowMenu] = useState(false);
  const [headerTitle, setHeaderTitle] = useState(header);
  const [value, setValue] = useState();
  const [itemsList, updateItemsList] = useState(
    items.map((item, i) => {
      return { index: i, value: item, selected: false };
    })
  );

  const toggleMenu = () => {
    if (!showMenu) {
      setValue(header);
      toggleShowMenu(true);
    } else {
      setValue(header);
    }
  };

  const selectItem = (item) => {
    console.log(item);
  };

  return (
    <div className={styles.container}>
      <ul>
        <li onClick={() => toggleMenu(!showMenu)}>{headerTitle}</li>
        {showMenu &&
          itemsList.map((item) => {
            return (
              <li
                key={item.index}
                value={item.value}
                onClick={selectItem.bind(null, item)}
              >
                <span className={styles.listItem}>{item.value}</span>
                <span className={styles.listSelected}>
                  {item.selected && "tick"}
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Dropdown;
