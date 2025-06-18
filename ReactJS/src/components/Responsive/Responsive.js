function Responsive() {
  return (
    <div className="p-4">
      <h1 className="text-base md:text-lg lg:text-2xl xl:text-4xl font-bold">
        Test Responsive
      </h1>
      <p className="text-sm md:text-base lg:text-lg xl:text-xl">
        Content Responsive
      </p>
      <button className="bg-blue-500 text-black px-4 py-2 mt-4 md:bg-green-500 lg:bg-red-500 xl:bg-purple-500">
        Button Responsive
      </button>
    </div>
  );
}

export default Responsive;
