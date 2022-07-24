import Table from "rc-table"

const HomeHead = [
    {
        title: "Count",
        dataIndex: "Count",
        key: "Count",
        width: 100
    },
    {
        title: "Total Pass",
        dataIndex: ["result", "Pass"],
        key: "Pass",
        width: 100
    },
    {
        title: "Total Fail",
        dataIndex: ["result", "Fail"],
        key: "Fail",
        width: 100
    },
    {
        title: "male",
        width: 100,
        children: [
            {
                title: "Pass",
                dataIndex: ["male", "malePass"],
                key: "malePass",
                width: 100
            },
            {
                title: "Fail",
                dataIndex: ["male", "maleFail"],
                key: "maleFail",
                width: 100
            }]
    },
    {
        title: "Female",
        width: 100,
        children: [
            {
                title: "Pass",
                dataIndex: ["female", "femalePass"],
                key: "femalePass",
                width: 100
            },
            {
                title: "Fail",
                dataIndex: ["female", "femaleFail"],
                key: "femaleFail",
                width: 100
            }]
    },
    {
        title: "Tamil",
        width: 100,
        children: [
            {
                title: "Pass",
                dataIndex: ["Tamil", "TamilPass"],
                key: "TamilPass",
                width: 100
            },
            {
                title: "Fail",
                dataIndex: ["Tamil", "TamilFail"],
                key: "TamilFail",
                width: 100
            }]
    },
    {
        title: "English",
        width: 100,
        children: [
            {
                title: "Pass",
                dataIndex: ["English", "englishPass"],
                key: "englishPass",
                width: 100
            },
            {
                title: "Fail",
                dataIndex: ["English", "englishFail"],
                key: "englishFail",
                width: 100
            }]
    },
    {
        title: "Maths",
        width: 100,
        children: [
            {
                title: "Pass",
                dataIndex: ["Maths", "MathPass"],
                key: "MathPass",
                width: 100
            },
            {
                title: "Fail",
                dataIndex: ["Maths", "MathFail"],
                key: "MathFail",
                width: 100
            }]
    },
    {
        title: "Science",
        width: 100,
        children: [
            {
                title: "Pass",
                dataIndex: ["Science", "SciencePass"],
                key: "SciencePass",
                width: 100
            },
            {
                title: "Fail",
                dataIndex: ["Science", "ScienceFail"],
                key: "ScienceFail",
                width: 100
            }]
    },
    {
        title: "Social",
        width: 100,
        children: [
            {
                title: "Pass",
                dataIndex: ["Social", "SocialPass"],
                key: "SocialPass",
                width: 100
            },
            {
                title: "Fail",
                dataIndex: ["Social", "SocialFail"],
                key: "SocialFail",
                width: 100
            }]
    }
]
let second = [
    {}
]
function Home({ value }) {
    const Passmarks = value.filter((ele) => {
        return (Object.values(ele.marks)).every((i) => i > 35)
    })

    const failingstudent = value.filter((element) => {
        return (Object.values(element.marks)).some((item) => item < 35);
    })
    
    const MalePassed = value.filter((ele) => ele.gender === "M" && (Object.values(ele.marks)).every((item) => item > 35))
    const MaleFailed = value.filter((ele) => ele.gender === "M" && (Object.values(ele.marks)).some((item) => item < 35))
    const FemalePassed = value.filter((ele) => ele.gender === "F" && (Object.values(ele.marks)).every((item) => item > 35))
    const FemaleFailed = value.filter((ele) => ele.gender === "F" && (Object.values(ele.marks)).some((item) => item < 35))
    const TamilPass = value.filter((ele) => ele.marks.tamil >= 35)
    const TamilFail = value.filter((ele) => ele.marks.tamil < 35)
    const EnglishPass = value.filter((ele) => ele.marks.english >= 35)
    const EnglishFail = value.filter((ele) => ele.marks.english < 35)
    const MathPass = value.filter((ele) => ele.marks.maths >= 35)
    const MathFail = value.filter((ele) => ele.marks.maths < 35)
    const SciencePass = value.filter((ele) => ele.marks.science >= 35)
    const ScienceFail = value.filter((ele) => ele.marks.science < 35)
    const SocialPass = value.filter((ele) => ele.marks.social >= 35)
    const SocialFail = value.filter((ele) => ele.marks.social < 35)
    second.forEach((e) => {
        e.Count = value.length
        e.result = {}
        e.result.Pass = Passmarks.length
        e.result.Fail = failingstudent.length
        e.male = {}
        e.male.malePass = MalePassed.length
        e.male.maleFail = MaleFailed.length
        e.female = {}
        e.female.femalePass = FemalePassed.length
        e.female.femaleFail = FemaleFailed.length
        e.Tamil = {}
        e.Tamil.TamilPass = TamilPass.length
        e.Tamil.TamilFail = TamilFail.length
        e.English = {}
        e.English.englishPass = EnglishPass.length
        e.English.englishFail = EnglishFail.length
        e.Maths = {}
        e.Maths.MathPass = MathPass.length
        e.Maths.MathFail = MathFail.length
        e.Science = {}
        e.Science.SciencePass = SciencePass.length
        e.Science.ScienceFail = ScienceFail.length
        e.Social = {}
        e.Social.SocialPass = SocialPass.length
        e.Social.SocialFail = SocialFail.length
    })

    return (
        <>
            <Table columns={HomeHead} data={second}></Table>
            <p className="resultCount">Minimum passmark: 35</p>
        </>
    )

}
export default Home