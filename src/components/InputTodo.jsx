const InputTodo = ({className, title, value, onChange}) => {
    return <div className={className}>
                <p>
                    <strong>{title} : &nbsp;</strong>
                    <input value={value} onChange={onChange}/>
                </p>
            </div>;
}

export default InputTodo; 