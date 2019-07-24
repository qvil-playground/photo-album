import { useEffect, useCallback } from "react";

export default (fn, delay, deps) => {
  console.log("TCL: fn", fn);
  useEffect(
    useCallback(() => {
      const handler = setTimeout(fn, delay);

      return () => clearTimeout(handler);
    }),
    [deps]
  );
};
