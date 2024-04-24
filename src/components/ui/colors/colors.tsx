import clsx from "clsx";

import config from "../../../../tailwind.config";
import { Text } from "../text/text";

const ColorSquares = () => {
  const colors = config.theme.extend.colors;

  return (
    <div className="p-12 flex flex-row flex-wrap gap-8">
      <div className="flex flex-col gap-2">
        <Text variant="h4">Primary</Text>
        <div className="size-24 bg-primary"></div>
      </div>
      {Object.entries(colors).map(([colorName]) => (
        <div key={colorName} className="flex flex-col gap-2">
          <Text variant="h4">{colorName}</Text>
          <div
            className={clsx({ [`bg-${colorName}`]: colorName }, "size-24")}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ColorSquares;
