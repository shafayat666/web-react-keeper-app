import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function addNote(note) {
    setItems(initValue => {
      return [...initValue, note]
    });
  }

  function deleteNote(id) {
    setItems(initValue => {
      return initValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  const isExpand = false;

  function areaExpand() {
    // isExpand = true;
    console.log("Got Clicked!");
  }

  return (
    <div>
      <Header />
      <CreateArea
        expandInput={areaExpand}
        isExpanded={isExpand}
        onAdd={addNote} />

      {items.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onSelect={deleteNote} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
