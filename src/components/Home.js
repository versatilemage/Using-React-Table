import Table from "rc-table"

function Home ({Heading, view}) {

    return (
        <>
            <Table columns={Heading} data={view}></Table>
            <p className="resultCount">Minimum passmark: 35</p>
        </>
    )
    
}
export default Home