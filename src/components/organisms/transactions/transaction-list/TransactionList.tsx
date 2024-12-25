import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";
import { TransactionEntry } from "../../../molecules/transactions";

const transactions = [
  {
    type: "buy" as never,
    amount: 14,
    ticker: "NYSE:GOOG",
    price: 105.34,
    date: "Mon Jan 13 2025 20:46:40 GMT+0100 (Central European Standard Time)" as never,
  },
  {
    type: "sell" as never,
    amount: 15,
    ticker: "FRA:USDA",
    price: 105.34,
    date: "Mon Jan 13 2025 20:46:40 GMT+0100 (Central European Standard Time)" as never,
  },
  {
    type: "cashflow" as never,
    amount: 3432,
    ticker: "WSE:BDX",
    price: 105.34,
    date: "Mon Jan 13 2025 20:46:40 GMT+0100 (Central European Standard Time)" as never,
  },
  {
    type: "costs" as never,
    amount: 3432,
    ticker: "WSE:BDX",
    price: 105.34,
    date: "Mon Jan 13 2025 20:46:40 GMT+0100 (Central European Standard Time)" as never,
  },
  {
    type: "dividend" as never,
    amount: 3432,
    ticker: "WSE:BDX",
    price: 105.34,
    date: "Mon Jan 13 2025 20:46:40 GMT+0100 (Central European Standard Time)" as never,
  },
  {
    type: "buy" as never,
    amount: 334,
    ticker: "NYSE:GOOG",
    price: 105.34,
    date: "Mon Jan 13 2025 20:46:40 GMT+0100 (Central European Standard Time)" as never,
  },
];

export const TransactionList = () => {
  const parentRef = useRef(null);

  // The virtualizer
  const rowVirtualizer = useVirtualizer({
    count: 10000,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 90,
  });

  return (
    <div
      ref={parentRef}
      style={{
        height: `auto`,
        overflow: "auto", // Make it scroll!
      }}
    >
      {/* The large inner element to hold all of the items */}
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {/* Only the visible items in the virtualizer, manually positioned to be in view */}
        {rowVirtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key as never}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            <TransactionEntry {...transactions[virtualItem.index % 6]} />
          </div>
        ))}
      </div>
    </div>
  );
};
