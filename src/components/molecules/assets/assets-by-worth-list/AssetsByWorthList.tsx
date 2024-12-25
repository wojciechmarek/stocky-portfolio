import { faker } from "@faker-js/faker";
import { findIndex, groupBy } from "lodash";
import { defaultRangeExtractor, useVirtualizer } from "@tanstack/react-virtual";
import type { Range } from "@tanstack/react-virtual";
import { useCallback, useMemo, useRef } from "react";

const groupedNames = groupBy(
  Array.from({ length: 1000 })
    .map(() => faker.name.firstName())
    .sort(),
  (name) => name[0]
);
const groups = Object.keys(groupedNames);
const rows = groups.reduce<Array<string>>(
  (acc, k) => [...acc, k, ...groupedNames[k]],
  []
);

export const AssetsByWorthList = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  const activeStickyIndexRef = useRef(0);

  const stickyIndexes = useMemo(
    () => groups.map((gn) => findIndex(rows, (n) => n === gn)),
    []
  );

  const isSticky = (index: number) => stickyIndexes.includes(index);

  const isActiveSticky = (index: number) =>
    activeStickyIndexRef.current === index;

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: () => 30,
    getScrollElement: () => parentRef.current,
    rangeExtractor: useCallback(
      (range: Range) => {
        activeStickyIndexRef.current =
          [...stickyIndexes]
            .reverse()
            .find((index) => range.startIndex >= index) ?? 0;

        const next = new Set([
          activeStickyIndexRef.current,
          ...defaultRangeExtractor(range),
        ]);

        return [...next].sort((a, b) => a - b);
      },
      [stickyIndexes]
    ),
  });

  return (
    <div>
      <div
        ref={parentRef}
        className="List"
        style={{
          height: `700px`,
          width: `400px`,
          overflow: "auto",
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => (
            <div
              key={virtualRow.index}
              className={"ListItem"}
              style={{
                ...(isSticky(virtualRow.index)
                  ? {
                      background: "var(--secondary-bg-color)",
                      color: "var(--primary-font-color)",
                      borderRadius: "8px",
                      paddingLeft: "10px",
                      zIndex: 1,
                    }
                  : {
                      paddingLeft: "10px",
                    }),
                ...(isActiveSticky(virtualRow.index)
                  ? {
                      position: "sticky",
                    }
                  : {
                      position: "absolute",
                      transform: `translateY(${virtualRow.start}px)`,
                    }),
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualRow.size}px`,
              }}
            >
              {rows[virtualRow.index]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
