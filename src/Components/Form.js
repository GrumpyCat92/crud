export default function Form({ addNote, form, setForm }) {
  const editContent = ({ target }) => {
    setForm({
      id: form.id,
      content: target.value,
    });
  };

  return (
    <div>
      <form onSubmit={addNote}>
        <textarea value={form.content} onChange={editContent}></textarea>
        <button type="submit" className="material-icons md-48">
          arrow_forward
        </button>
      </form>
    </div>
  );
}
