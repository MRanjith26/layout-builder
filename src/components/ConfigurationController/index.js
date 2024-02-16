// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const changeContent = () => {
        onToggleShowContent()
      }

      const changeLeftNav = () => {
        onToggleShowLeftNavbar()
      }

      const changeRightNav = () => {
        onToggleShowRightNavbar()
      }

      return (
        <nav className="top-container">
          <div className="controller-card">
            <h1 className="top-heading">Layout</h1>
            <div className="option-container">
              <div className="option-card">
                <input
                  type="checkbox"
                  checked={showContent}
                  id="content"
                  className="check-box"
                  onChange={changeContent}
                />
                <label htmlFor="content" className="label-text">
                  Content
                </label>
              </div>
              <div className="option-card">
                <input
                  type="checkbox"
                  checked={showLeftNavbar}
                  id="left-navbar"
                  className="check-box"
                  onChange={changeLeftNav}
                />
                <label htmlFor="left-navbar" className="label-text">
                  Left Navbar
                </label>
              </div>
              <div className="option-card">
                <input
                  type="checkbox"
                  checked={showRightNavbar}
                  id="right-navbar"
                  className="check-box"
                  onChange={changeRightNav}
                />
                <label htmlFor="right-navbar" className="label-text">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
