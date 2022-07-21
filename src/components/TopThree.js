import Table from "rc-table";

function TopThree ({content, Heading}) {
    return (
        <>
            <Table columns={Heading} data={content}></Table>
        </>
    )
}
export default TopThree