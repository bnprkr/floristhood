import { useState, flushSync, useEffect } from "react";
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

  useEffect(() => {
    if (value) {
      setHeaderTitle(value);
      toggleShowMenu(false);
    }
  }, [value]);

  const toggleMenu = () => {
    if (!showMenu) {
      setHeaderTitle(header);
      toggleShowMenu(true);
    } else {
      if (value) setHeaderTitle(value);
      toggleShowMenu(false);
    }
  };

  const selectItem = (item) => {
    updateItemsList((prevState) => {
      return prevState.map((el) => {
        if (el.index === item.index) el.selected = true;
        else el.selected = false;
        return el;
      });
    });

    setValue(item.value);
  };

  return (
    <div className={styles.container}>
      <ul>
        <li onClick={toggleMenu}>{headerTitle}</li>
        {showMenu &&
          itemsList.map((item) => {
            return (
              <li key={item.index} onClick={selectItem.bind(null, item)}>
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
