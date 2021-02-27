import React from "react";

const BUURTEN: Buurt[] = [
  { name: "Staatsliedenbuurt", tags: ["Hier woon ik", "Vlak bij Westerpark"] },
  { name: "Rivierenbuurt", tags: ["Berlage"] },
  { name: "Indische Buurt", tags: [] },
];

interface Buurt {
  name: string;
  tags: string[];
}

interface BuurtenContextInterface {
  buurten: Buurt[];
  findBuurt: (buurtName: string) => Buurt | undefined;
  updateBuurt: (buurt: Buurt) => void;
}

const buurtenContext = React.createContext<BuurtenContextInterface | undefined>(
  undefined
);

const useBuurten = (): BuurtenContextInterface => {
  const context = React.useContext(buurtenContext);

  if (context === undefined) {
    throw new Error("useBuurten must be used within a BuurtenProvider");
  }

  return context;
};

const BuurtenProvider: React.FC = ({ children }) => {
  const [buurten, setBuurten] = React.useState<Buurt[]>([]);

  const context = {
    buurten,
    findBuurt: (buurtName: string) =>
      buurten.find(
        (buurt) => buurt.name.toLowerCase() === buurtName.toLowerCase()
      ),
    updateBuurt: (newBuurt: Buurt) => {
      const newBuurten = buurten.reduce<Buurt[]>(
        (buurten: Buurt[], buurt: Buurt) =>
          buurt.name === newBuurt.name
            ? [...buurten, newBuurt]
            : [...buurten, buurt],
        []
      );
      setBuurten(newBuurten);
    },
  };

  React.useEffect(() => {
    setBuurten(BUURTEN);
  }, []);

  return (
    <buurtenContext.Provider value={context}>
      {children}
    </buurtenContext.Provider>
  );
};

export { BuurtenProvider, useBuurten };

export type { Buurt };
