import DataTable from "./DataTable"
import Graph1 from "./graph1"
import Graph2 from "./graph2"

const Dashboard = () => {
    return <div className="h-full grid gap-3 p-3">
        <Graph1 />
        <Graph2 />
        <DataTable />
    </div>
}

export default Dashboard