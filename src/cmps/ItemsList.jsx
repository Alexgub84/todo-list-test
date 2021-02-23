import React from "react";

import { Item } from "./Item";

export function ItemsList({ items }) {
  return (
    <div>
      {React.Children.toArray(items.map((item) => <Item item={item} />))}
    </div>
  );
}
