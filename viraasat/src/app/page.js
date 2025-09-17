export default function ExtremeTest() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 animate-gradient-x">
      <div className="bg-white/90 dark:bg-gray-900/90 p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl text-center transform hover:scale-105 transition-all duration-500 ease-in-out max-w-4xl mx-auto border border-indigo-300 dark:border-purple-500">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 mb-6 animate-pulse">
          Tailwind CSS Test
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed tracking-wide">
          This pushes Tailwind to the limits with animations, responsiveness, dark mode, arbitrary values, and more!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-tl from-red-500 to-yellow-500 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:rotate-3 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-white mb-2">Card 1</h2>
            <p className="text-white/80">Responsive grid with hover effects.</p>
          </div>
          <div className="bg-gradient-to-tr from-green-500 to-blue-500 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-rotate-3 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-white mb-2">Card 2</h2>
            <p className="text-white/80">Arbitrary gradients and rotations.</p>
          </div>
          <div className="bg-gradient-to-bl from-purple-500 to-pink-500 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-white mb-2">Card 3</h2>
            <p className="text-white/80">Scale on hover with easing.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <button className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-3 px-6 rounded-full transition-all duration-200 ease-out active:scale-95 shadow-md hover:shadow-lg">
            Primary Button
          </button>
          <button className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-full transition-all duration-200 ease-out active:scale-95 shadow-md hover:shadow-lg">
            Secondary Button
          </button>
          <button className="bg-pink-600 hover:bg-pink-800 text-white font-bold py-3 px-6 rounded-full transition-all duration-200 ease-out active:scale-95 shadow-md hover:shadow-lg animate-bounce">
            Bouncy Button
          </button>
        </div>
        <div className="mt-10 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-pulse"></div>
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 italic">
          Resize the window to see responsive changes. Toggle dark mode if supported.
        </p>
      </div>
    </div>
  );
}