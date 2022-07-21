import Table from "rc-table"

function Total ({Content, Heading}) {
    return (
        <>
            <Table columns={Heading} data={Content}></Table>
        </>
    )
}
export default Total