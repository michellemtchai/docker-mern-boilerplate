import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../shared/routes';

class NavBar extends React.Component {
	render() {
        let curr = this.props.router.location.pathname;
        let links = ['/', '/about-us'];
		return (
            <nav>
                {links.map((link, i)=>
                    <Link className={curr==link ? 'curr-page': ''}
                        key={'link-'+i}
                        to={link}>
                        {routes[link].title}
                    </Link>
                )}
            </nav>
        );
  	}
}

export default NavBar;
