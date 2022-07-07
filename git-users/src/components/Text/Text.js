const Text = (props) => {
    return (
        <span className={props.className}>
            {props.children}
            <br />
        </span>
    )
}

export default Text