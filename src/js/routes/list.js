import {asyncComponent} from 'routes/utils';

const Home = asyncComponent(() => System.import('app/pages/Home').then(module => module.default));

// routes
const PathParam = asyncComponent(() => System.import('app/pages/PathParam').then(module => module.default));
const NestedRoute = asyncComponent(() => System.import('app/pages/NestedRoute').then(module => module.default));
const Form = asyncComponent(() => System.import('app/pages/NestedRoute/pages/Form').then(module => module.default));
const Table = asyncComponent(() => System.import('app/pages/NestedRoute/pages/Table').then(module => module.default));

// redux form
const SimpleForm = asyncComponent(() => System.import('app/pages/ReduxForm').then(module => module.default));

// random render
const RandomRender = asyncComponent(() => System.import('app/pages/RandomRender').then(module => module.default));

const Scoreboard = asyncComponent(() => System.import('app/pages/Scoreboard').then(module => module.default));

export default [
    {path: '/home', component: Home},
    {
        path: '/nested-route',
        component: NestedRoute,
        routes: [
            {path: '/nested-route/form', component: Form},
            {path: '/nested-route/table', component: Table}
        ]
    },
    {path: '/path-param/:id', component: PathParam},
    {path: '/redux-form', component: SimpleForm},
    {path: '/random-render', component: RandomRender},
    {path: '/score-board', component: Scoreboard}
];
