import Button from 'react-bootstrap/Button';
import './App.css';

function ProfileButton(props) {
    return (
        <a href={props.url} class="ProfileButton">
            <Button variant='link'>
                {props.icon}
            </Button>
        </a>
    );
}

export default ProfileButton;