import Table from "rc-table";

function Pass ({content, Heading}) {
    return (
        <>
            <Table columns={Heading} data={content}></Table>
        </>
    )
}
export default Pass