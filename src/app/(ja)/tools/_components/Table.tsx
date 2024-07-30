import { type ReactNode } from "react";

// type TableProps = {
//   theadData: ReactNode[];
//   tbodyData: ReactNode[][];
// };

// export function Table({ theadData, tbodyData, ...props }: TableProps) {
//   return (
//     <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" {...props}>
//       <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
//         <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
//           <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
//             {/* ▼▼▼ thead ▼▼▼ */}
//             <thead className="bg-gray-50 dark:bg-gray-800">
//               <tr>
//                 {theadData.map((el, index) => (
//                   <th
//                     key={index}
//                     scope="col"
//                     className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
//                   >
//                     {el}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             {/* ▲▲▲ thead ▲▲▲ */}
//             {/* ▼▼▼ tbody ▼▼▼ */}
//             <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
//               {tbodyData.map((data, index) => (
//                 <tr key={index}>
//                   {data.map((el, dataIndex) => (
//                     <td
//                       key={`${index}-${dataIndex}`}
//                       className="px-4 py-4 text-sm font-medium whitespace-nowrap"
//                     >
//                       {el}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//             {/* ▲▲▲ tbody ▲▲▲ */}
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

type TableProps = {
  children: ReactNode;
};

export function Table({ children, ...props }: TableProps) {
  return (
    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" {...props}>
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            {children}
          </table>
        </div>
      </div>
    </div>
  );
}

type TableHeadProps = {
  children: ReactNode;
};

export function TableHead({ children, ...props }: TableHeadProps) {
  return (
    <thead className="bg-gray-50 dark:bg-gray-800" {...props}>
      {children}
    </thead>
  );
}

type TableBodyProps = {
  children: ReactNode;
};

export function TableBody({ children, ...props }: TableBodyProps) {
  return (
    <tbody
      className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
      {...props}
    >
      {children}
    </tbody>
  );
}

type TableThProps = {
  children: ReactNode;
};

export function TableTh({ children, ...props }: TableThProps) {
  return (
    <th
      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
      {...props}
    >
      {children}
    </th>
  );
}

type TableTdProps = {
  children: ReactNode;
};

export function TableTd({ children, ...props }: TableTdProps) {
  return (
    <th className="px-4 py-4 text-sm font-medium whitespace-nowrap" {...props}>
      {children}
    </th>
  );
}
