export default function Button(props) {
    const buttonProps = props.props;
    return <button id={buttonProps.id} className={buttonProps.className} type={buttonProps.type} onClick={buttonProps.onClickFunc}>{buttonProps.title}</button>
}