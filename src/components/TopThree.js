import Table from "rc-table";

const TopThreeStudents = [
    {
        title: "Student",
        dataIndex: "name",
        key: "name",
        width: 100
    },
    {
        title: "Section",
        dataIndex: "section",
        key: "section",
        width: 100
    },
    {
        title: "Tamil",
        dataIndex: ["marks","tamil"],
        key: "tamil",
        width: 100
    },
    {
        title: "English",
        dataIndex: ["marks","english"],
        key: "english",
        width: 100
    },
    {
        title: "Maths",
        dataIndex: ["marks","maths"],
        key: "maths",
        width: 100
    },
    {
        title: "Science",
        dataIndex: ["marks","science"],
        key: "science",
         width: 100
    },
    {
        title: "Social",
        dataIndex: ["marks","social"],
        key: "social",
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
    }
]
function TopThree ({value}) {
    const sortingArrays = value.sort((a, b) => b.Total - a.Total)
    const threetop = sortingArrays.slice(0, 3)
    return (
        <>
            <Table columns={TopThreeStudents} data={threetop}></Table>
        </>
    )
}
export default TopThree