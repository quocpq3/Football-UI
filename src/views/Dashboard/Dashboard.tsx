import { Table, TableColumn, TableHeader,TableBody,TableRow,TableCell, getKeyValue } from "@heroui/table";
import { Link } from 'react-router-dom';
import { leagueTable } from "../../data/leagueTable";
const DashBoard = function () {

const columns = [
  { key: 'position', label: '#' },
  { key: 'team', label: 'TEAM' },
  { key: 'played', label: 'MP' },
  { key: 'won', label: 'W' },
  { key: 'drawn', label: 'D' },
  { key: 'lost', label: 'L' },
  { key: 'goalDifference', label: 'GD' },
  { key: 'points', label: 'PTS' },
];


    return ( 
        <div className="container flex flex-col">
            <h1 className="pl-6 text-4xl font-semibold">Dashboard</h1>
            <div className="flex mt-[50px] justify-evenly ">
                <div className="w-[45%] h-[300px] rounded-2xl bg-gray-100 shadow-md"></div>
                <div className="w-[45%] h-[300px] rounded-2xl bg-gray-100 shadow-md"></div>
            </div>
            <div className="flex mt-[50px] justify-evenly ">
                <div className="w-[45%] h-[600px] rounded-2xl bg-gray-100 shadow-md flex flex-col overflow-hidden">
                    <div className="flex items-center justify-between px-5 pt-6">
                        <p className="text-sm font-semibold">Standings</p>
                        <Link to='' className="text-sm font-medium text-[#E21C34]">View all</Link>
                    </div>
                    <div className="w-full h-full p-2">
                        <Table aria-label="Example table with dynamic content">
                            <TableHeader           
                            columns={columns}>
                                {(column) => <TableColumn 
                                className="text-xs"
                                key={column.key}>{column.label}</TableColumn>}
                            </TableHeader>
                            <TableBody 
                            items={leagueTable}>
                                    {(item) =>(
                                        <TableRow key={item.key}>
                                            {(columnKey ) => 
                                            <TableCell className="text-[14px]">
                                            {columnKey ==="team" ? (
                                                <div className="flex items-center gap-2">
                                                    <img src={item.logo} alt={item.team} className="object-contain w-6 h-6" />
                                                    <span>{item.team}</span>
                                                </div>
                                            ) : (
                                                getKeyValue(item,columnKey)
                                            )}
                                            </TableCell>}
                                        </TableRow>
                                    )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
                <div className="w-[45%] h-[600px] flex flex-col justify-between">      
                    <div className="flex flex-col w-[100%] h-[45%] bg-gray-100 shadow-md rounded-2xl">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                    <div className="w-[100%] h-[45%] bg-amber-200 shadow-md rounded-2xl"></div>
                </div>
           
            </div>
        </div>
     );
}

export default DashBoard ;