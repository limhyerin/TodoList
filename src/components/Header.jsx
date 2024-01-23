const Header = ({className1, className2, children1, children2}) => {
    return <header>
                <div className={className1}>{children1}</div>
                <div className={className2}>{children2}</div>
            </header>;
}

export default Header; 