SELECT
  id, name
  FROM department

  SELECT 
  role.id, role.title, role.salary, department.name
  FROM role
  JOIN department ON role.department_id = department.id

  SELECT
  e1.first_name, e1.last_name, role.title, department.name AS department, role.salary,  CONCAT(e2.first_name, " ", e2.last_name) AS manager
  FROM employee e1
  LEFT JOIN employee e2 ON e1.id = e2.manager_id
  INNER JOIN role ON e1.role_id = role.id
  INNER JOIN department ON role.department_id = department.id