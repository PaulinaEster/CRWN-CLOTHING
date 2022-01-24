import react from 'react';
import './menu-item.styles.scss';
import { Link, Navigate, useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }
  return ComponentWithRouterProp;
}

const MenuItem = (props) => {

  let navigate = useNavigate();
  return (
    <div className={`menu-item ${props.size}`}

      onClick={() => navigate(`${props.router.location.pathname}${props.linkUrl} `)}
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
}

export default withRouter(MenuItem);
