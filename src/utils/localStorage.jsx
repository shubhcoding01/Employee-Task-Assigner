
const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "firstname": "Amit",
    "task_numbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "task_title": "Develop New Feature",
        "task_description": "Develop a new feature for the application.",
        "task_date": "2025-02-17",
        "category": "Development"
      },
      {
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "task_title": "Testing Module 2",
        "task_description": "Testing the second module of the application.",
        "task_date": "2025-02-15",
        "category": "Testing"
      },
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": true,
        "task_title": "Research for New Tech Stack",
        "task_description": "Research on integrating new technologies for the stack.",
        "task_date": "2025-02-14",
        "category": "Research"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "firstname": "Priya",
    "task_numbers": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "task_title": "Documentation Update",
        "task_description": "Update the documentation for the latest features.",
        "task_date": "2025-02-17",
        "category": "Documentation"
      },
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": true,
        "task_title": "Fix Bug in Development",
        "task_description": "Fix a critical bug in the development branch.",
        "task_date": "2025-02-16",
        "category": "Development"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "firstname": "Ravi",
    "task_numbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new": false,
        "completed": true,
        "failed": false,
        "task_title": "Final Research Report",
        "task_description": "Complete and submit the research report.",
        "task_date": "2025-02-17",
        "category": "Research"
      },
      {
        "active": false,
        "new": true,
        "completed": false,
        "failed": false,
        "task_title": "Design New UI Layout",
        "task_description": "Design a new user interface layout for the app.",
        "task_date": "2025-02-14",
        "category": "Design"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "firstname": "Neha",
    "task_numbers": {
      "active": 2,
      "newTask": 2,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "task_title": "Feature Enhancement",
        "task_description": "Enhance the existing feature based on client feedback.",
        "task_date": "2025-02-17",
        "category": "Development"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "task_title": "Quality Assurance Testing",
        "task_description": "Run quality assurance testing on the new build.",
        "task_date": "2025-02-16",
        "category": "Testing"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "firstname": "Sanya",
    "task_numbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": false,
        "new": true,
        "completed": false,
        "failed": false,
        "task_title": "Design New Logo",
        "task_description": "Design a new logo for the company.",
        "task_date": "2025-02-15",
        "category": "Design"
      },
      {
        "active": true,
        "new": false,
        "completed": true,
        "failed": false,
        "task_title": "Complete Research Paper",
        "task_description": "Finalize and submit the research paper.",
        "task_date": "2025-02-17",
        "category": "Research"
      },
      {
        "active": false,
        "new": false,
        "completed": false,
        "failed": true,
        "task_title": "Revise Documentation",
        "task_description": "Revise the outdated documentation for the project.",
        "task_date": "2025-02-14",
        "category": "Documentation"
      }
    ]
  }
];


  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  
  export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));

  };

  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    // console.log(employeesdata, adminData);
    return{employees, admin}
  };