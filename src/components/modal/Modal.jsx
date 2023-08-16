export default function Modal({ children, setModalShow }) {
  return (
    <section onClick={() => setModalShow(false)} className="w-screen h-screen fixed top-0 left-0 bg-black/25">

      <div onClick={(e) => e.stopPropagation()} className="w-11/12 sm:w-80 my-2 absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 transition">
        {children}
      </div>
      
    </section>
  );
}
