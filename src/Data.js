let studentArr = [ 
    { 
      name: 'Muthu', 
      gender: 'M', 
      section: "X-B",
      marks: { 
        tamil: 82, 
        english: 74, 
        maths: 88, 
        science: 72, 
        social: 90 } 
    },
      
    { 
      name: 'Arun', 
      gender: 'M', 
      section: "X-B",
      marks: { 
        tamil: 78, 
        english: 59, 
        maths: 79, 
        science: 99, 
        social: 82 } }, 
      
    { 
      name: 'Abi', 
      gender: 'F', 
      section: "X-A",
      marks: { 
        tamil: 98, 
        english: 94, 
        maths: 82, 
        science: 72, 
        social: 86 } }, 
     
    { 
      name: 'Santhiya', 
      gender: 'F', 
      section: "X-C",
      marks: { 
        tamil: 57, 
        english: 35, 
        maths: 48, 
        science: 32, 
        social: 35 } }, 
     
    { 
      name: 'Saravanan', 
      gender: 'M', 
      section: "X-A",
      marks: { 
        tamil: 97, 
        english: 91, 
        maths: 92, 
        science: 83, 
        social: 79 } }, 
     
    { 
      name: 'Sathish', 
      gender: 'M', 
      section: "X-C",
      marks: { 
        tamil: 32, 
        english: 36, 
        maths: 31, 
        science: 39, 
        social: 44 }  
      } 
  ]

const columns = [
    {
        title: "Overall rank",
        dataIndex: "Rank",
        key:"Rank",
        width: 100
    },
    {
        title: "Student",
        dataIndex: "name",
        key:"name",
        width: 100
    },
    {
        title: "Gender",
        dataIndex: "gender",
        key: "gender",
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

const Allresult = [
    {
        title:"Student",
        dataIndex: "name",
        key: "name",
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
    },
    {
        title:"Result",
        dataIndex: "result",
        key: "result",
        width: 100
    }
]

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

const HomeHead = [
    {
        title: "Count",
        dataIndex: "Count",
        key: "Count",
        width: 100
    },
    {
        title: "Total Pass",
        dataIndex: ["result","Pass"],
        key: "Pass",
        width: 100
    },
    {
        title: "Total Fail",
        dataIndex: ["result","Fail"],
        key: "Fail",
        width: 100
    },
    {
        title: "male",
        width: 100,
        children:[
        {
            title:"Pass",
            dataIndex: "TotalStudent",
            key: "TotalStudent",
            width: 100
        },
        {
            title:"Fail",
            dataIndex: "TotalStudent",
            key: "TotalStudent",
            width: 100
        }]
    },
    {
        title: "Female",
        width: 100,
        children:[
        {
            title:"Pass",
            dataIndex: "TotalStudent",
            key: "TotalStudent",
            width: 100
        },
        {
            title:"Fail",
            dataIndex: "TotalStudent",
            key: "TotalStudent",
            width: 100
        }]
    },
    {
        title: "Tamil",
        width: 100,
        children:[
        {
            title:"Pass",
            dataIndex: "TotalStudent",
            key: "TotalStudent",
            width: 100
        },
        {
            title:"Fail",
            dataIndex: "TotalStudent",
            key: "TotalStudent",
            width: 100
        }]
    },
    {
        title: "English",
        width: 100,
        children:[
        {
            title:"Pass",
            dataIndex: "TotalStudent",
            key: "TotalStudent",
            width: 100
        },
        {
            title:"Fail",
            dataIndex: "TotalStudent",
            key: "TotalStudent",
            width: 100
        }]
    },
    {
        title: "Maths",
        width: 100,
        children:[
        {
            title:"Pass",
            dataIndex: "TotalStudent",
            key: "TotalStudent",
            width: 100
        },
        {
            title:"Fail",
            dataIndex: "TotalStudent",
            key: "TotalStudent",
            width: 100
        }]
    },
    {
        title: "Science",
        width: 100,
        children:[
        {
            title:"Pass",
            dataIndex: "TotalStudent",
            key: "TotalStudent",
            width: 100
        },
        {
            title:"Fail",
            dataIndex: "TotalStudent",
            key: "TotalStudent",
            width: 100
        }]
    },
    {
        title: "Social",
        width: 100,
        children:[
        {
            title:"Pass",
            dataIndex: "TotalStudent",
            key: "TotalStudent",
            width: 100
        },
        {
            title:"Fail",
            dataIndex: "TotalStudent",
            key: "TotalStudent",
            width: 100
        }]
    }
]

export {columns, studentArr, Allresult, TopThreeStudents, HomeHead}

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     width: 100,
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//     width: 100,
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//     width: 200,
//   },
//   {
//     title: 'Operations',
//     dataIndex: '',
//     key: 'operations',
//     render: () => <a href="#">Delete</a>,
//   },
// ];

// const data = [
//   { name: 'Jack', age: 28, address: 'some where', key: '1' },
//   { name: 'Rose', age: 36, address: 'some where', key: '2' },
// ];
