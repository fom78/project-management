
export const status = [
  {
    value: 'enabled',
    name: 'Enabled'
  },
  {
    value: 'disabled',
    name: 'Disabled'
  }
]
export const users = [
  {
    name: 'Perez Juan',
    value: 1,
    photo: 'avatar01.png'
  },
  {
    name: 'Castro Miriam',
    value: 2,
    photo: 'avatar04.png'
  },
  {
    name: 'Walt Cosani',
    value: 3,
    photo: 'avatar02.png'
  },
  {
    name: 'Ignacio Truffa',
    value: 4,
    photo: 'avatar03.png'
  }
]

export const projects = [
  {
    id: 1,
    projectName: 'Landing Page',
    creationDate: '09/09/09 10:30',
    description: 'description',
    assignedTo: users[3].name,
    projectManager: users[1].name,
    status: status[0].value
  },
  {
    id: 2,
    projectName: 'E-Commerce Shop',
    creationDate: '10/09/22 05:30',
    description: 'description',
    assignedTo: users[0].name,
    projectManager: users[2].name,
    status: status[0].value
  },
  {
    id: 3,
    projectName: 'CRM Linkroom',
    creationDate: '07/18/21 17:00',
    description: 'description',
    assignedTo: users[0].name,
    projectManager: users[1].name,
    status: status[0].value
  },
  {
    id: 4,
    projectName: 'Back Office google',
    creationDate: '05/24/22 21:00',
    description: 'description',
    assignedTo: users[3].name,
    projectManager: users[2].name,
    status: status[0].value
  },
  {
    id: 5,
    projectName: 'Challenge Esto Es',
    creationDate: '05/24/22 21:00',
    description: 'description',
    assignedTo: users[3].name,
    projectManager: users[1].name,
    status: status[0].value
  },
  {
    id: 6,
    projectName: 'Landing Page ONG',
    creationDate: '04/30/22 10:30',
    description: 'description',
    assignedTo: users[3].name,
    projectManager: users[1].name,
    status: status[0].value
  },
  {
    id: 7,
    projectName: 'Fix Facebook site',
    creationDate: '10/01/22 05:30',
    description: 'description',
    assignedTo: users[0].name,
    projectManager: users[2].name,
    status: status[1].value
  },
  {
    id: 8,
    projectName: 'Portal House',
    creationDate: '05/28/21 17:00',
    description: 'description',
    assignedTo: users[0].name,
    projectManager: users[1].name,
    status: status[0].value
  },
  {
    id: 9,
    projectName: 'New feat SAP',
    creationDate: '05/24/22 21:00',
    description: 'description',
    assignedTo: users[3].name,
    projectManager: users[2].name,
    status: status[0].value
  },
  {
    id: 10,
    projectName: 'Siemens web',
    creationDate: '05/24/22 21:00',
    description: 'description',
    assignedTo: users[3].name,
    projectManager: users[1].name,
    status: status[1].value
  }
]
