import '../styles/ContentBlock.css';

export default function ContentBlock({ id, children, backgroundColor }) {
    return (
        <div 
            id={id} 
            className='content-block'
            style={{ backgroundColor }}
        >
            {children}
        </div>
    )
}
