export default function Note({ note, deleteNote }) {
  return (
    <div className="note">
      {note.content}
      <button
        className="material-icons md-48"
        onClick={() => deleteNote(note.id)}
      >
        delete
      </button>
    </div>
  );
}
