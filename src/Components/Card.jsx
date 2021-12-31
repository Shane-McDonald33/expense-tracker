import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className; // MUST HAVE WHITE SPACE IN THE STRING, CLASSNAME INHERITS THE PRE-ASSIGNED STYLES
    return <div className={classes}>{props.children}</div> // CHILDREN INHERITS STYLING FROM THE PROPS THAT HAS ALREADY BEEN ATTRIBUTED
}

export default Card;