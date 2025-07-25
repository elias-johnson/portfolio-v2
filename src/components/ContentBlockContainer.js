import AboutBlock from './AboutBlock';
import HomeBlock from './HomeBlock';
import '../styles/ContentBlockContainer.css';

export default function ContentBlockContainer() {
    return (
        <div className='content-block-container'>
            <HomeBlock />
            <AboutBlock />
        </div>
    )
}
