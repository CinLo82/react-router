import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from "./auth";

function Menu () {
    const auth = useAuth();

    return (
        <nav>
            <ul>
                {routes.map( route =>  {
                    if (route.publicOnli && auth.user) return null;
                    if (route.private && !auth.user) return null;

                    return (
                    <li key={route.to} >
                        <NavLink 
                            style={({ isActive }) => ({
                                color: isActive ? 'red' : 'blue',
                            })}
                            to={route.to}
                            >
                               {route.text}
                        </NavLink>
                    </li>
                    );
                })}
            </ul>
        </nav>
    );
}

const routes = [];
routes.push({
    to: '/',
    text: 'Home',
    private: false,
});
routes.push({
    to: '/blog',
    text: 'Blog',
    private: false,
});
routes.push({
    to: '/profile',
    text: 'Profile',
    private: true,
});
routes.push({
    to: '/login',
    text: 'login',
    private: false,
    publicOnli: true,
});
routes.push({
    to: '/logout',
    text: 'logout',
    private: true,
});


export { Menu };