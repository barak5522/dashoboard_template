'use client';
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

const Table = (props: any) => {
    const { filters, rows, columns } = props
    return (
        <div className=''>
        <DataGrid
            rows={rows} columns={columns}
            components={{ Toolbar: GridToolbar }}
            initialState={{
            filter: {
                filterModel: {
                items: filters,
                },
            },
            }}
        />
        </div>
    )
}

export default Table