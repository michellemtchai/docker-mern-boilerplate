import Home from '../pages/home';
import AboutUs from '../pages/aboutUs';
import NotFound from '../pages/notFound';

export const navlinks = ['/', '/about-us'];

export const routes = {
    '/': {
        component: Home,
        title: 'Home',
        exact: true,
    },
    '/about-us': {
        component: AboutUs,
        title: 'About Us',
    },
    '': {
        component: NotFound,
        title: 'Page Not Found',
    }
}
export const routeKey = (location)=>{
    let index = 0;
    let paths = Object.keys(routes);
    while(index < paths.length){
        let path = paths[index];
        if(path === ''){
            return path;
        }
        if(matchingRoute(path, location)){
            return path;
        }
        index+=1;
    }
}

const matchingRoute = (path, location)=>{
    path = path.replace(/\//g, '\\/');
    path = path.replace(/:[a-z\d]+/gi,
        '[a-zA-Z\\d_\\-\\.~&$\+,=@#;]+')
    let regex = new RegExp(`^${path}$`);
    let result = location.match(regex);
    return result ? true : false;
}
