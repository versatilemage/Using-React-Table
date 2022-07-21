import Table from "rc-table";

function Result ({Content, Heading}) {
    return (
        <>
            <Table columns={Heading} data={Content}></Table>
        </>
    )
}
export default Result