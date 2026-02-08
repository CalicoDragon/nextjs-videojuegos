"use client";

import { useState } from "react";

export default function GameForm() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!title) return;

    const response = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    if (response.ok) {
      // CODE TO EXECUTE AFTER FORM SUBMIT
    } else {
      alert("Failed to submit");
    }
  };

  return (
    <div>
      <h1>Add a Game</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          placeholder="Game Title"
        />
        <button type="submit" className="cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
}
