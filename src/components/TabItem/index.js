// Write your code here
import './index.css'

const TabItem = tabs => {
  const {tabsList, onClickTabItems, isActive} = tabs
  const {displayText, tabId} = tabsList

  const onClickTab = () => {
    onClickTabItems(tabId)
  }

  const onTabClick = isActive ? 'tab-select' : ''

  return (
    <li>
      <button type="button" onClick={onClickTab} className="tabs">
        {displayText}
      </button>
      <hr className={onTabClick} />
    </li>
  )
}

export default TabItem
