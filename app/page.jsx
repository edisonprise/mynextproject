"use client";
export default function Home() {
  return (
    <section>
      <h1>Hello World</h1>
      <button
        onClick={() => {
          alert("hello");
        }}
      >
        Click Me!
      </button>
    </section>
  );
}
