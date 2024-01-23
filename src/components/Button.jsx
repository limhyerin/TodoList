const Button = ({clickAddHandler, children}) => {
    return <button className="inputBtn" onClick={clickAddHandler}><strong>{children}</strong></button>;
}

export default Button; 