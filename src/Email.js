import './Email.css';

const Email = ({ email, type }) => (
    <div className="email">
        <p>{type}: {email}</p>
    </div>
);

export default Email;