import Table from "rc-table"

function Average({content, Heading}) {       
        return (
            <>
                <Table columns={Heading} data={content}></Table>
            </>
        )
    }
export default Average