// local js
import PageIntro from '../pageComponents/PageIntro';
import { useTitle } from '../customHooks';

function Dyetr(props) {
    useTitle("Dyetr");
    
    return (
        <div className="Dyetr">
            <PageIntro 
                name="Dyetr"
                date="March 2021"
                description="A calorie-counting app with a food recommendation system."
                link="https://github.com/iancooperman/Dyetr"
            />
        </div>
    );
}

export default Dyetr;