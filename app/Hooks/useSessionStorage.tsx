import React from "react";

export function useSessionStorage(key: any, intialValue?: any) {
  const [lsData, setlsData] = React.useState(() => {
    return JSON.parse(sessionStorage.getItem(key) as any) || intialValue;
  });

  const setSessessionStoragelsData = React.useCallback(
    (lsData: any): void => {
      setlsData(() => {
        if (lsData) {
          sessionStorage.setItem(key, JSON.stringify(lsData));
        } else {
          console.log("no lsData to store in local storage");
          return;
        }

        return lsData;
      });
    },
    [key]
  );

  React.useEffect(() => {
    setSessessionStoragelsData(lsData);

    const refreshStorageFunc = (event: any) => {
      if (event.key === key) {
        setlsData(event.newlsData);
      }
    };
    window.addEventListener("storage", refreshStorageFunc);

    return () => {
      window.removeEventListener("storage", refreshStorageFunc);
    };
  }, [key, setSessessionStoragelsData, lsData]);

  return { lsData, setlsData: setSessessionStoragelsData };
}
