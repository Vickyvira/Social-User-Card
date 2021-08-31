import './SocialCard.css';
import Email from './Email';

const SocialCard = ({ userData }) => {
    return (
        <div className="card">
            <div className="card__title">{userData.first_name} {userData.last_name}</div>
            <div className="card__body">
                <Email email={userData.email} type="Email"/>
                <div className="card__image"><img src={userData.avatar}/></div>
            </div>

        </div>
    )
};

export default SocialCard;