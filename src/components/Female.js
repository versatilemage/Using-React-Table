import Table from "rc-table";

function Female({content, Heading}) {
    return (
        <>
            <Table columns={Heading} data={content}></Table>
        </>
    )
}
export default Female