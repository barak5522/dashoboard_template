import Table from './Table'

const columns = [
    { field: '_id', width: 150 },
    { field: 'time', width: 150 },
    { field: 'status', width: 150 },
]

let rows: any[] = [{id: 0, _id: 1, time: '12:00:00', status: 'DONE'}]
const DataTable = () => {
    return <div className='graph row-start-1 row-end-3'>
        { rows.length ?
        <Table rows={rows} columns={columns} filters={[]} /> :
        <span>אין שדות</span>}
    </div>
}

export default DataTable
