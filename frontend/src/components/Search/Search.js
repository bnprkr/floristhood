import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from './Search.module.css'

function Search() {
  return (
    <div className={styles.container}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt quis tortor at dignissim. Donec porttitor, lectus sit amet efficitur hendrerit, libero dui rhoncus.
      </p>
      <button><FontAwesomeIcon icon={faMagnifyingGlass} className={styles.magnifyingGlass} /></button>
    </div>
  )
}

export default Search;