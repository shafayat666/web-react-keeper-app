import DeleteIcon from "@mui/icons-material/Delete";

function Note (props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => {
                props.onSelect(props.id);
            }}><DeleteIcon/></button>
        </div>
    );
}

export default Note;