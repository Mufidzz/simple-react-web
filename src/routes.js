import React, {lazy} from 'react';
import {Redirect} from 'react-router-dom';

import DashboardLayout from './layouts/Dashboard';
import News from './views/News'

const routes = [
    {
        path: "/",
        exact: true,
        component: () => <Redirect to="/dashboard"/>
    },
    {
        route: '*',
        component: DashboardLayout,
        routes: [
            {
                path: '/news',
                exact: true,
                component: () => <News/>
            },
            {
                path: '/news/olahraga',
                exact: true,
                component: () => <News category="olahraga"/>
            },
            {
                path: '/news/publik',
                exact: true,
                component: () => <News category="publik"/>
            },
            {
                path: '/news/hiburan',
                exact: true,
                component: () => <News category="hiburan"/>
            },
            {
                path: '/news/games',
                exact: true,
                component: () => <News category="games"/>
            },
            {
                path: '/news/sepakbola',
                exact: true,
                component: () => <News category="sepakbola"/>
            },
        ]
    }
];

export default routes;