import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faKaggle } from '@fortawesome/free-brands-svg-icons';

export function GithubIcon(props) {
    return (
        <div class="GitHubIcon">
            <FontAwesomeIcon icon={faGithub} size="lg" fixedWidth />
        </div>
    );
}


export function LinkedInIcon(props) {
    return (
        <div class="LinkedInIcon">
            <FontAwesomeIcon icon={faLinkedin} size="lg" fixedWidth />
        </div>
    );
}

export function KaggleIcon(props) {
    return (
        <div class="KaggleIcon">
            <FontAwesomeIcon icon={faKaggle} size="lg" fixedWidth />
        </div>
    )
}

export function KaggleIconCredit(props) {
    return (
        <div class="KaggleIconCredit">
            <a href="https://icons8.com/icon/1iP83OYM1FL-/kaggle">Kaggle icon by Icons8</a>
        </div>
    )
}