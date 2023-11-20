import { useState } from "react";

export default function Activity({ name, handleDelete }) {
  const [newText, setNewText] = useState(name);
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {};
  return (
    <div className="activity">
      {!edit && (
        <>
          <p style={{ width: "50%", textAlign: "center" }}>{name}</p>
          <div style={{ width: "50%", display: "flex", gap: 5 }}>
            <button
              style={{ color: "white", backgroundColor: "red", border: 0 }}
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              onClick={() => setEdit(true)}
              style={{ color: "white", backgroundColor: "seagreen", border: 0 }}
            >
              edit
            </button>
          </div>
        </>
      )}
      {edit && (
        <>
          <EditActivity
            value={newText}
            handleDone={() => setEdit(false)}
            handlChange={setNewText}
          />
        </>
      )}
    </div>
  );
}

function EditActivity({ handlChange, value, handleDone }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <input
        placeholder="edit"
        value={value}
        style={{ width: 120 }}
        onChange={(e) => handlChange(e.target.value)}
      />
      <button style={{ width: 50 }} onClick={handleDone}>
        Done
      </button>
    </div>
  );
}
