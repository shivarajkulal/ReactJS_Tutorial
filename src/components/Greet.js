// Props
const Greet = props => {
    return (
        <div>
            <h1>
                Hello, {props.name} alias {props.alias}
            </h1>
            {props.children}
        </div>
    );
}

export default Greet; 