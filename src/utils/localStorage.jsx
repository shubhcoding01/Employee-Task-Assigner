
const employees = [
  {
    "id": 1,
    "email": "e@e.com",
    "password": "123",
    "firstname": "Amit",
    "task_numbers": {
      "active": 2,
      "new": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "task_title": "Task 1",
        "task_description": "Description of Task 1",
        "task_date": "2025-02-17",
        "category": "Development"
      },
      {
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "task_title": "Task 2",
        "task_description": "Description of Task 2",
        "task_date": "2025-02-15",
        "category": "Testing"
      },
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": true,
        "task_title": "Task 3",
        "task_description": "Description of Task 3",
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
      "new": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "task_title": "Task 4",
        "task_description": "Description of Task 4",
        "task_date": "2025-02-17",
        "category": "Documentation"
      },
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": true,
        "task_title": "Task 5",
        "task_description": "Description of Task 5",
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
      "new": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new": false,
        "completed": true,
        "failed": false,
        "task_title": "Task 6",
        "task_description": "Description of Task 6",
        "task_date": "2025-02-17",
        "category": "Research"
      },
      {
        "active": false,
        "new": true,
        "completed": false,
        "failed": false,
        "task_title": "Task 7",
        "task_description": "Description of Task 7",
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
      "new": 2,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "task_title": "Task 8",
        "task_description": "Description of Task 8",
        "task_date": "2025-02-17",
        "category": "Development"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "task_title": "Task 9",
        "task_description": "Description of Task 9",
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
      "new": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": false,
        "new": true,
        "completed": false,
        "failed": false,
        "task_title": "Task 10",
        "task_description": "Description of Task 10",
        "task_date": "2025-02-15",
        "category": "Design"
      },
      {
        "active": true,
        "new": false,
        "completed": true,
        "failed": false,
        "task_title": "Task 11",
        "task_description": "Description of Task 11",
        "task_date": "2025-02-17",
        "category": "Research"
      },
      {
        "active": false,
        "new": false,
        "completed": false,
        "failed": true,
        "task_title": "Task 12",
        "task_description": "Description of Task 12",
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