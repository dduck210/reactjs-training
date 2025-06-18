function TestCSS() {
  return (
    <div className="test-css">
      <div>
        <h5 className="">Start aligned text on all viewport sizes.</h5>
        <p className="text-right">Center aligned text on all viewport sizes.</p>
        <p className="text-end">End aligned text on all viewport sizes.</p>
        <p className="text-sm-end">
          End aligned text on viewports sized SM (small) or wider.
        </p>
        <p className="text-md-end">
          End aligned text on viewports sized MD (medium) or wider.
        </p>
        <p className="text-lg-end">
          End aligned text on viewports sized LG (large) or wider.
        </p>
        <p className="text-xl-end">
          End aligned text on viewports sized XL (extra large) or wider.
        </p>
        <p className="text-xxl-end">
          End aligned text on viewports sized XXL (extra extra large) or wider.
        </p>
      </div>
      {/* Attribute chỉnh màu button */}
      <div className="text-center">
        {/* Button basic */}
        <button type="button" className="btn">
          Button Basic
        </button>
        {/* Button primary màu xanh dương đậm */}
        <button type="button" className="btn btn-primary">
          Button Blue Đậm
        </button>
        {/* Button secondary màu xanh lá cây */}
        <button type="button" className="btn btn-success">
          Button Green
        </button>
        {/* Button info màu xanh dương nhạt */}
        <button type="button" className="btn btn-info">
          Button Blue Nhạt
        </button>
        {/* Button warning màu vàng */}
        <button type="button" className="btn btn-warning">
          Button Yellow
        </button>
        {/* Button danger màu đỏ */}
        <button type="button" className="btn btn-danger">
          Button Red
        </button>
        {/* Button dark màu đen */}
        <button type="button" className="btn btn-dark">
          Button Black
        </button>
        {/* Button light màu xám */}
        <button type="button" className="btn btn-light">
          Button Grey
        </button>
        {/* Button link màu xám nhưng mà sẽ gạch chân bên dưới vì là link */}
        <button type="button" className="btn btn-link">
          Button
        </button>
      </div>
      {/* Done attribute chỉnh màu button */}

      {/* Chỉnh kích cỡ button */}
      <div className="text-center mt-5">
        <button type="button" className="btn btn-info btn-lg">
          Large
        </button>
        <button type="button" className="btn btn-secondary">
          Default
        </button>
        <button type="button" className="btn btn-danger btn-sm">
          Small
        </button>
      </div>
      {/* Done chỉnh kích cỡ button */}
    </div>
  );
}

export default TestCSS;
