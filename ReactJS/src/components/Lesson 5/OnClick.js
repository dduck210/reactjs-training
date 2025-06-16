function OnClick() {
  const handleClick = () => {
    console.log("Bấm thành công, button k lỗi");
  };

  const handleClickLink = (event) => {
    event.preventDefault();
    console.log("Link đúng");
  };
  return (
    <div>
      <button type="submit" className="btn btn-info" onClick={handleClick}>
        Bấm vào đi
      </button>
      {/* <textarea className="">Bấm vào đi</textarea> */}
      <p className="">Bấm vào đi</p>
      <a href="https://stackoverflow.com/" onClick={handleClickLink}>
        Link
      </a>
    </div>
  );
}

export default OnClick;
