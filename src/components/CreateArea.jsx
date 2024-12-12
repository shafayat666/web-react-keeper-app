import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {

  // handling the note
  const [noteText, setNoteText] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNoteText(initValue => {
      return {
        ...initValue,
        [name]: value
      };
    });
  }

  const [isExpanded, setExpanded] = useState(false);


  return (
    <div>
      <form className="create-note"
        onSubmit={(event) => {
          event.preventDefault();
          props.onAdd(noteText);
          setNoteText({ title: "", content: "" })
        }}>

        {isExpanded && (<input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={noteText.title} />)}

        <textarea
          onClick={() => setExpanded(true)}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={noteText.content} />

        <Zoom in={isExpanded}>
          <Fab type="submit"><AddIcon /></Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
