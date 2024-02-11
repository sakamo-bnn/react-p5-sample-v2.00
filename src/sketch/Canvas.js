import React, { useEffect } from "react";
import p5 from 'p5';
import circle from '../sketch/circle';

const Canvas = () => {
  useEffect(() => {
    new p5(circle); // p5.jsのキャンバスを生成
  }, []);

  return (<></>);
};

export default Canvas;
