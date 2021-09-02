import Button from 'react-bootstrap/Button';
import '../App.css';

import { GithubIcon, LinkedInIcon, KaggleIcon } from './Icons';

function ProfileButton(props) {
    return (
        // <a href={props.url} class="ProfileButton">
        //     <Button variant='link'>
        //         {props.icon}
        //     </Button>
        // </a>
        <span className="ProfileButton" >
            <Button href={props.url} variant="light">
                {props.icon}
            </Button>
        </span>

    );
}

export function ProfileButtons(props) {
    return (
        <div className="ProfileButtons">
            <ProfileButton
                url="https://github.com/iancooperman"
                icon={<GithubIcon />}
                className="mx-3"
            />
            <ProfileButton
                url="https://www.linkedin.com/in/ian-pl-cooperman/"
                icon={<LinkedInIcon />}
                className="mx-3"
            />
            <ProfileButton
                url="https://www.kaggle.com/iancooperman42"
                icon={<KaggleIcon />}
                className="mx-3"
            />
        </div>

    );
}

export default ProfileButton;