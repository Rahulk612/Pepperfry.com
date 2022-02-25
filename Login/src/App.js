import './App.css';
import Header from './components/Header/Header';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { checkAutoLogin } from './services/AuthService';
import { isAuthenticated } from './store/selectors/AuthSelectors';

const Home = lazy(() => import('./pages/Home/Home'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Login = lazy(() => import('./pages/Login/Login'));

function App(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(props);
        checkAutoLogin(dispatch, props.history);
    }, []);

    let routes = (
        <Switch>
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />
        </Switch>
    );

    if (props.isAuthenticated) {
        routes = (
            <Switch>
                
              
                <Route path='/' component={Home} exact />
                <Redirect to='/' />
            </Switch>
        );
    }

    return (
        <div>
            <Header />
            <div className='container px-3 mx-auto'>
                <Suspense fallback={<div>Loading...</div>}>
                    {routes}
                </Suspense>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: isAuthenticated(state),
    };
};

export default withRouter(connect(mapStateToProps)(App));
