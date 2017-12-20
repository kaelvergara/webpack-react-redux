import {asyncComponent} from 'shared/route.util';

const Base = asyncComponent(() => System.import('components/Base').then(module => module.default));
const Home = asyncComponent(() => System.import('routes/Home').then(module => module.default));
const NestedRoute = asyncComponent(() => System.import('routes/NestedRoute').then(module => module.default));
const Form = asyncComponent(() => System.import('routes/NestedRoute/routes/Form').then(module => module.default));
const Table = asyncComponent(() => System.import('routes/NestedRoute/routes/Table').then(module => module.default));

export default [
    {
        path: '/',
        component: Base,
        routes: [
            {path: '/', component: Home, exact: true},
            {
                path: '/nested-route',
                component: NestedRoute,
                routes: [
                    {path: '/nested-route/form', component: Form},
                    {path: '/nested-route/table', component: Table}
                ]
            }
        ]
    }
];
