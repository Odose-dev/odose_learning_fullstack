export default function Card({children} ) {
    return (
        <div className='card'>
            <h1>My React Card</h1>
            {children}
        </div>
    );
}