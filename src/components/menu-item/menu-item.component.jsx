import react from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = (props) => (
  <div className={`menu-item ${props.size}`}
    onClick={() => props.history.push(`${props.match.url}${props.linkUrl} `)}
  >
    <div 
      className='background-image' 
      style={{
        backgroundImage: `url(${props.imgURL})`
      }}
    />
    <div className="content">
      <h1 className="title"> {props.title} </h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(MenuItem);
