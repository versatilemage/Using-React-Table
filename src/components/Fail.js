import Table from "rc-table"

function Fail({content, Heading}) {
    return (
        <>
            <Table columns={Heading} data={content}></Table>
        </>
    )
}
export default Fail