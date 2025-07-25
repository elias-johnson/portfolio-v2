import '../styles/ContentBlock.css';

export default function ContentBlock({ id, style, children }) {
    return (
        <div 
            id={id} 
            className='content-block'
            style={style}
        >
            {children}
        </div>
    )
}
