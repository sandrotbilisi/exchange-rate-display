// "use client";
import { getTable } from "@/lib/api/tables/data";
import Image from "next/image";

export default async function Page({ params }: { params: { table: string } }) {
  const table = await getTable("684311ec8fdd8c78549b1ca6");

  return (
    <div className="wrapper bg-black">
      {/* write table name above */}
      <div className="fixed top-4 right-4 text-white font-bold text-center bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent animate-pulse drop-shadow-2xl ">
        {table.name} Branch
      </div>

      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col items-center justify-center p-12 w-full">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-slate-900/10 to-transparent"></div>

        <h1 className="text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent animate-pulse drop-shadow-2xl relative z-10 text-center">
          Exmony
        </h1>

        {/* <FullscreenButton /> */}

        <div className="w-full max-w-7xl relative z-10">
          <div className="bg-gradient-to-r from-slate-800/50 via-slate-700/50 to-slate-800/50 backdrop-blur-xl border border-slate-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-black/20">
            <table className="w-full text-left table-auto">
              <thead className="bg-gradient-to-r from-gray-600/20 via-slate-600/20 to-gray-600/20 text-slate-200 border-b border-slate-400/30">
                <tr>
                  <th className="p-2 font-bold text-lg lg:text-xl uppercase tracking-wider">
                    Currency
                  </th>
                  {/* <th className="p-2 font-bold text-lg lg:text-xl uppercase tracking-wider">
                    Country
                  </th> */}
                  <th className="p-2 font-bold text-lg lg:text-xl uppercase tracking-wider">
                    Buy
                  </th>
                  <th className="p-2 font-bold text-lg lg:text-xl uppercase tracking-wider">
                    Sell
                  </th>
                  <th className="p-2 font-bold text-lg lg:text-xl uppercase tracking-wider text-center">
                    Notable <br /> Price
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {table.currencies.map((cur) => (
                  <tr
                    key={cur.code}
                    className="hover:bg-gradient-to-r hover:from-slate-800/20 hover:via-slate-700/20 hover:to-slate-800/20 transition-all duration-300 group"
                  >
                    <td className="flex items-center gap-2 p-2">
                      {cur.image && (
                        <div className="relative">
                          <Image
                            src={cur.image || "/placeholder.svg"}
                            alt={cur.label}
                            width={64}
                            height={64}
                            className="object-cover transition-all duration-300"
                          />
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-slate-300/20 to-slate-400/20 group-hover:from-slate-300/40 group-hover:to-slate-400/40 transition-all duration-300"></div>
                        </div>
                      )}
                      <span className="font-mono font-bold text-xl lg:text-2xl text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                        {cur.code}
                      </span>
                    </td>
                    {/* <td className="p-2 text-lg lg:text-xl font-medium text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                      {cur.label}
                    </td> */}
                    <td className="p-2 text-center">
                      <span className="text-green-400 font-bold text-lg lg:text-xl">
                        {cur.buyRate}
                      </span>
                    </td>
                    <td className="p-2 text-center">
                      <span className="text-yellow-400 font-bold text-lg lg:text-xl">
                        {cur.sellRate}
                      </span>
                    </td>
                    <td className="p-2 text-center">
                      <span className="text-blue-400 font-bold text-lg lg:text-xl">
                        {cur.notableRate}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Decorative elements - made larger */}
          <div className="absolute -top-6 -left-8 w-40 h-40 bg-gradient-to-r from-gray-600 to-slate-700 rounded-full blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-r from-gray-500 to-slate-600 rounded-full blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>
  );
}
