// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-content">
          {showLeftNavbar ? (
            <div className="left-nav-card">
              <h1 className="nav-title">Left Navbar Menu</h1>
              <ul className="nav-menu">
                <li className="nav-item">Item 1</li>
                <li className="nav-item">Item 2</li>
                <li className="nav-item">Item 3</li>
                <li className="nav-item">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-card">
              <h1 className="content-title">Content</h1>
              <p className="content-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus hendrerit congue ligula eu lobortis. Sed imperdiet
                enim lectus, id sodales enim sollicitudin sit amet. Etiam at
                eleifend sem, aliquet suscipit nibh. Vestibulum mi ex, tincidunt
                id porta quis, molestie sed risus.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <nav className="right-nav-card">
              <h1 className="nav-title">Right Navbar Menu</h1>
              <div className="ad-card">
                <p className="ad-item">Ad 1</p>
                <p className="ad-item">Ad 2</p>
              </div>
            </nav>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
