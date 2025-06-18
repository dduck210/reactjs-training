function HoverFocusActice() {
  return (
    <div className="p-10 space-y-4">
      {/* Test hover */}
      <button className="bg-blue-500 text-black px-4 py-2 hover:bg-blue-700">
        Test hover
      </button>
      {/* Test focus */}
      <input
        type="text"
        placeholder="Vui lòng điền thông tin"
        className="ml-4 mr-4 border border-red-400 px-3 py-2 focus:border-blue-500 focus:outline-none"
      />
      {/* Test active */}
      <button className="bg-green-500 text-black px-4 py-2 active:scale-95">
        Test active
      </button>
    </div>
  );
}

export default HoverFocusActice;
