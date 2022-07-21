import Table from "rc-table";

function Male({content, Heading}) {
    return (
        <>
            <Table columns={Heading} data={content}></Table>
        </>
    )
}
export default Male