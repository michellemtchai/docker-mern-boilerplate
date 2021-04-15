import React from 'react';
import { Link } from 'react-router-dom';
import { routes, navlinks, routeKey } from '../../config';

class NavBar extends React.Component {
    currentPage = (link) => {
        let currentPath = this.props.location.pathname;
        let route = this.props.match.path;
        let currLink = this.props.routes[link];
        currLink = currLink ? currLink : {};
        let children = currLink.children
            ? currLink.children
            : [];
        let current =
            link == route ||
            link == currentPath ||
            children.includes(route) ||
            children.includes(currentPath);
        return current ? 'curr-page' : '';
    };
    title = (link) => {
        return this.props.routes[routeKey(this.props, link)]
            .title;
    };
    render() {
        return (
            <nav>
                <ul>
                    {navlinks.map((link, i) => (
                        <li key={'link-' + i}>
                            <Link
                                to={link}
                                className={this.currentPage(
                                    link
                                )}
                            >
                                {this.title(link)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default NavBar;
