import { useEffect, useState } from "react";
import { url } from "../Constants";
import Form from "./Form";
import Note from "./Note";

export default function Notebook() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({
    id: "",
    content: "",
  });

  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
    fetch(`${url}notes`)
      .then((resp) => resp.json())
      .then((json) => setNotes([...json]));
  };

  const deleteNote = (id) => {
    fetch(`${url}notes/${id}`, { method: "DELETE" }).then((data) => getAll());
  };

  const addNote = (e) => {
    e.preventDefault();
    const newNote = {
      id: 0,
      content: form.content,
    };

    setNotes([...notes, newNote]);

    const json = JSON.stringify(newNote);

    fetch(`${url}notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: json,
    }).then((data) => getAll());

    setForm({
      content: "",
      id: 0,
    });
  };

  return (
    <div>
      <h1>
        Notes
        <span className="material-icons md-48" onClick={() => getAll()}>
          refresh
        </span>
      </h1>
      {notes.map((note) => (
        <Note note={note} key={note.id} deleteNote={deleteNote} />
      ))}
      <br />
      <br />
      <Form addNote={addNote} form={form} setForm={setForm} />
    </div>
  );
}
