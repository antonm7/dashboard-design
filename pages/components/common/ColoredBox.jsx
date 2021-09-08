export default function ColoredBox(props) {
    return (
        <div id="colored-box" style={{backgroundColor:props.color}}>
            <p id="number">{props.number}</p>
            <p id="title">{props.title}</p>
            <p id="secTitle">{props.secTitle}</p>
        </div>
    )
}