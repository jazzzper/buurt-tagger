import React from "react";

const BUURTEN: Buurt[] = [
  {
    name: "Staatsliedenbuurt",
    tags: ["Naast Westerpark", "GWL terrein", "Hier woont Jasper", "West"],
  },
  { name: "Rivierenbuurt", tags: ["Berlage", "Amsterdamse School", "Zuid"] },
  { name: "Indische Buurt", tags: [] },
  {
    name: "Bijlmermeer",
    tags: ["Modernisme", "Honingraatflats", "Vliegramp", "Zuid-Oost"],
  },
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
