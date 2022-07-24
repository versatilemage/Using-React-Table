import Table from "rc-table";

const Allresult = [
    {
        title:"Student",
        dataIndex: "name",
        key: "name",
        width: 100
    },
    {
        title:"Section",
        dataIndex: "section",
        key: "section",
        width: 100
    },
    {
        title: "Total",
        dataIndex: "Total",
        key: "Total",
        width: 100
    },
    {
        title: "Average",
        dataIndex: "Average",
        key: "Average",
        width: 100
    },
    {
        title:"Result",
        dataIndex: "result",
        key: "result",
        width: 100
    }
]
function Result ({Content}) {
    return (
        <>
            <Table columns={Allresult} data={Content}></Table>
        </>
    )
}
export default Result