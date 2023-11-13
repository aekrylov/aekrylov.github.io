export default function Home() {
  return (
    <div className="flex h-screen text-white">
      <div className="m-auto text-center">
        <h1 className="text-6xl font-serif">Anton Krylov</h1>
        <p className="text-2xl">Backend JVM Engineer.<br/>Working on enterprise stuff at Swiss Re.<br/>Currently in Amsterdam.</p>
        <div className="flex justify-center text-xl mt-8">
          <a href="https://github.com/aekrylov" target="_blank" className="text-blue-200 mx-2">Github</a>
          <a href="https://t.me/aekrylov" target="_blank" className="text-blue-200 mx-2">Telegram</a>
          <a href="mailto:hi@aekrylov.me" target="_blank" className="text-blue-200 mx-2">Email</a>
        </div>
      </div>
    </div>
  );
}

