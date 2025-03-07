type TransactionsTableProps = {
  data: {
    [key: string]: string | number;
  }[];
  tableHeaders: {
    [key: string]: string;
  }[];
};

export function TransactionsTable({
  data,
  tableHeaders,
}: TransactionsTableProps) {
  if (!data.length || !tableHeaders.length) {
    return <div>No transactions available</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-[var(--brand-table-seperator)]">
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-sm font-medium text-[var(--brand-text-secondary)]"
              >
                {Object.values(header)[0]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--brand-table-seperator)]">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {tableHeaders.map((header, colIndex) => {
                const key = Object.keys(header)[0];
                return (
                  <td
                    key={`${rowIndex}-${colIndex}`}
                    className={`px-6 py-4 whitespace-nowrap text-sm ${
                      key === "status" ? "text-green-600" : "text-white"
                    }`}
                  >
                    {row[key]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
