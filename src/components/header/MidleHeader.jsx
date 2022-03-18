import { useState } from "react";

export default function MidleHeader() {
  const [text, setText] =
    useState(`This week only! Save $15 of $70+ with code BARAKA. Buy your weekly
    Grocery`);
  return (
    <div className="midle-header">
      <div className="container">
        <div className="midle-header-body">
          <p className="midle-header-text">{text}</p>
        </div>
      </div>
    </div>
  );
}
