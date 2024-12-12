import { useState } from "react";

function CreateArea(props) {

  // handling the note
  const [noteText, setNoteText] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;

    setNoteText(initValue => {
      return {
        ...initValue,
        [name]: value
      };
    });
  }
  
  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        props.onAdd(noteText);
        setNoteText({title: "", content: ""})
      }}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={noteText.title} />

        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteText.content} />

        <button type="submit">Add</button>

      </form>
    </div>
  );
}

export default CreateArea;
