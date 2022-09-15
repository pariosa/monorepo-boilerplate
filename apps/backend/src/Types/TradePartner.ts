export type TradePartner = {
    vendorId: string,
    vendorName: string,
}

export function createData(
  vendorId: string,
  vendorName: string,
): TradePartner {
  return {
    vendorId,
    vendorName,
  };
}

export const rows = [
  createData('AU105', 'A & A Safety, INC',),
  createData('ST108', 'AAA Metal Works',),
  createData('YN109', 'AAA Mudjackers, INC',),
  createData('WH110', 'AAA Home Painting & Remodeling, LLC'),
  createData('AL111', 'AAA Concrete Services'),
  createData('EY100', 'Abercrombie and Associates'),
  createData('BE453', 'Benchmark Building Supply, INC',),
  createData('ZH990', 'Zimmerman Heating and Air',),
  createData('DR549', 'Goldman and Sacs, INC',),
  createData('BB221', 'Deluth and Sons Carpentry',),
  createData('AA219', 'Prowler Sanitation',),
  createData('BE782', 'Duke Energy',),
  createData('KL221', 'Maxwell Painters, LLC',),
];