export const tableData =[
    {
        id:'1',
        title:'Task1',
        description:'Important task',
        status:'in progress',
        periority:'high',
        deadline:'22-3-2022',
        startDate:'15-3-2022',
        assignee:'Hesham'
    },
    {
        id:'2',
        title:'Task2',
        description:'Important task',
        status:'to-do',
        periority:'medium',
        deadline:'23-3-2022',
        startDate:'16-3-2022',
        assignee:'Ahmed'
    },
    {
        id:'3',
        title:'Task3',
        description:'Important task',
        status:'done',
        periority:'low',
        deadline:'24-3-2022',
        startDate:'17-3-2022',
        assignee:'Muhammed'
    },
    {
        id:'4',
        title:'Task4',
        description:'Important task',
        status:'in progress',
        periority:'high',
        deadline:'22-3-2022',
        startDate:'15-3-2022',
        assignee:'Hesham'
    },
    {
        id:'5',
        title:'Task5',
        description:'Important task',
        status:'to-do',
        periority:'medium',
        deadline:'27-3-2022',
        startDate:'12-3-2022',
        assignee:'Ahmed'
    },
    {
        id:'6',
        title:'Task6',
        description:'Important task',
        status:'done',
        periority:'low',
        deadline:'21-3-2022',
        startDate:'14-3-2022',
        assignee:'Muhammed'
    },
   
];


export const tableColumns = [
    {
      name: 'Title',
      selector: (row: any) => row.title,
      sortable: true,
    },
    {
      name: 'Description',
      selector: (row: any) => row.description,
    },
    {
      name: 'Periority',
      selector: (row: any) => {
        let className;
        switch (row.periority) {
          case 'high':
            className='highPeriority'
            break;
            case 'medium':
            className='mediumPeriority'
            break;
          case 'low':
            className='lowMedium'
          break;
          default:
            className='lowMedium'
            break;
        }
        return(<p className={className}>{row.periority}</p>)
        },
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row: any) => {
        let className;
        switch (row.status) {
          case 'To-Do':
            className='toDoStatus'
            break;
            case 'In Progress':
            className='inProgressStatus'
            break;
          case 'Done':
            className='doneStatus'
          break;
          default:
            className='toDoStatus'
            break;
        }
        return(
          <div className={className}>
        <p className="statusText">{row.status.toUpperCase()}</p>
        </div>
        )},
      sortable: true,
    },
    {
      name: 'Deadline',
      selector: (row: any) => row.deadline,
      sortable: true,
    },
    {
      name: 'Start date',
      selector: (row: any) => row.startDate,
      sortable: true,
    },
    {
      name: 'assignee',
      selector: (row: any) => row.assignee,
      sortable: true,
    },
  ];




  export const assigneesOptions =[
    {value:'Ahmed', label:'Ahmed'},
    {value:'Muhammed', label:'Muhammed'},
    {value:'Hesham', label:'Hesham'},
    {value:'Ali', label:'Ali'},
    {value:'Mustafa', label:'Mustafa'},
  ]

  export const perorityOptions =[
    {value:'high', label:'High'},
    {value:'medium', label:'Medium'},
    {value:'low', label:'Low'},
  ]

  
  export const statusOptions =[
    {value:'To-Do', label:'To-Do'},
    {value:'In Progress', label:'In Progress'},
    {value:'Done', label:'Done'},
  ]