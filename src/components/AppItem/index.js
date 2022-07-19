// Write your code here
import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {imageUrl, appName} = appsList

  return (
    <li className="app-item-container">
      <img className="image" src={imageUrl} alt={appName} />
      <p className="name">{appName}</p>
    </li>
  )
}

export default AppItem
