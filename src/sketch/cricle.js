const circle = (p) => {
  p.setup = () => {
    // セットアップ処理
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(220);
    p.ellipse(200, 200, 80, 80); // サークルを描画
  };
};

export default circle;
