import { connect, useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../../store/actions/AuthActions';
import { isAuthenticated } from '../../store/selectors/AuthSelectors';

function Header(props) {
    const dispatch = useDispatch();

    function onLogout() {
        dispatch(logout(props.history));
    }
    return (
        <div>
            <div className='bg-red-400 text-white px-2 py-2 flex items-center '>
               

                <div>
                   

                    {!props.isAuthenticated && (
                        <>
                            <Link to='/signup' className='px-2'>
                                SignUp
                            </Link>
                            <Link to='/login'  className='px-2'>
                                Login
                            </Link>
                        </>
                    )}

                    {props.isAuthenticated && (
                        <>
                       
                            <button className='px-2' onClick={onLogout}>
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: isAuthenticated(state),
    };
};

export default withRouter(connect(mapStateToProps)(Header));
