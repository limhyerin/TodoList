const Button = ({clickAddHandler, children}) => {
    return <p onClick={clickAddHandler}>{children}</p>;
}

export default Button; 