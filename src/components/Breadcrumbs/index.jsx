import React from 'react';
import {Link} from "react-router-dom";

const Breadcrumbs = ({routes}) => {
  return (
      <div className='flex'>
        {routes.map((route, index) => (
            <div key={route.name}>
              {index > 0 ? '/' : ''}
              {route.isLink ? <Link to={route.route}>{route.name}</Link> : <span>{route.name}</span>}
            </div>
        ))}
      </div>
  );
};

export default Breadcrumbs;