// local js
import PageIntro from '../pageComponents/PageIntro';
import { useTitle } from '../customHooks';

function Fabflix(props) {
    useTitle("Fabflix");

    return (
        <div className="Fabflix">
            <PageIntro
                name="Fabflix"
                date="June 2020"
                description="A sample Netflix-like website created for a class."
            />
        </div>
    );
}

export default Fabflix;