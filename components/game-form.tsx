"use client";

import { useState } from "react";

export default function GameForm({
  isOpen,
  onClose,
}: {
  isOpen: any;
  onClose: any;
}) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!title || !genre) return;

    const response = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, genre }),
    });

    if (response.ok) {
      // CODE TO EXECUTE AFTER FORM SUBMIT
    } else {
      alert("Failed to submit");
    }
  };

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors bg-black/20 ${isOpen ? "visible" : "invisible"}`}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 relative bg-gray-50 rounded-xl p-10 border border-gray-500 shadow-md"
      >
        <button
          onClick={onClose}
          className="absolute right-2 top-2 cursor-pointer"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6 stroke-black transition duration-400 ease-out opacity-50 rotate-45 hover:opacity-90 hover:rotate-135"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 12h16m-8-8v16"
            />
          </svg>
        </button>
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          placeholder="Game Title"
          className="text-center bg-gray-200 rounded-xl p-1.5"
        />
        <input
          type="text"
          value={genre}
          onChange={(event) => {
            setGenre(event.target.value);
          }}
          placeholder="Game Genre"
          className="text-center bg-gray-200 rounded-xl p-1.5"
        />
        <button
          onClick={onClose}
          type="submit"
          className="cursor-pointer text-white bg-black p-2.5 rounded-xl transition duration-200 hover:bg-blue-500 hover:text-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
