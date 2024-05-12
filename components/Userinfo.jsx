export default function Userinfo() {
  return (
    <div className="grid place-content-center h-screen">
      <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-2">
        <div>
          Name: <span className="font-bold">Abc</span>
        </div>
        <div>
          Email: <span className="font-bold">Abc</span>
        </div>
        <button className="bg-red-500 text-white font-bold px-6 py-2 mt-3">
          Log out
        </button>
      </div>
    </div>
  );
}
