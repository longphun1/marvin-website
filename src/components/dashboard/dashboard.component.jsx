import { signOutUser } from '../../utils/firebase/firebase.utils';
import './dashboard.styles.scss';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

const Dashboard = () => {
    const user = useSelector(selectCurrentUser)
    return (
        <div>
            <h3>HOMEPAGE</h3>
            <h3>{user.email}</h3>
            <button onClick={signOutUser}>sign out</button>
        </div>
    )
};

export default Dashboard;