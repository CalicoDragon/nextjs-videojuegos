"use client";
import styles from "./gameCard.module.css";

export default function AddCard({ clickAdd }: { clickAdd: any }) {
  return (
    <button
      title="Add a game to your collection"
      onClick={clickAdd}
      className={styles.add}
    >
      <svg
        aria-hidden="true"
        className="w-12 h-12 stroke-black cursor-pointer transition duration-400 ease-out hover:rotate-6 hover:stroke-blue-600"
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
  );
}
