// stickyNotes.js
const notes = [];
export function addNote(text) { notes.push(text); renderNotes(); }
function renderNotes() {
    const container = document.getElementById("sticky-notes");
    container.innerHTML = "";
    notes.forEach((note, i) => {
        const div = document.createElement("div");
        div.className = "sticky";
        div.innerText = note;
        container.appendChild(div);
    });
}
