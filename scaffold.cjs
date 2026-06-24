const fs = require('fs');
const path = require('path');

const files = [
  'src/components/Navbar/Navbar.jsx',
  'src/components/Footer/Footer.jsx',
  'src/components/Sidebar/Sidebar.jsx',
  'src/pages/Home/Home.jsx',
  'src/pages/About/About.jsx',
  'src/pages/Students/Students.jsx',
  'src/pages/Staffs/Staffs.jsx',
  'src/pages/FAQ/FAQ.jsx',
  'src/pages/Login/Login.jsx',
  'src/pages/Register/Register.jsx',
  'src/dashboard/student/Dashboard/StudentDashboard.jsx',
  'src/dashboard/student/Profile/StudentProfile.jsx',
  'src/dashboard/student/EditProfile/StudentEditProfile.jsx',
  'src/dashboard/admin/Dashboard/AdminDashboard.jsx',
  'src/dashboard/admin/Students/AdminStudents.jsx',
  'src/dashboard/admin/StudentDetails/AdminStudentDetails.jsx'
];

files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  const name = path.basename(file, '.jsx');
  const content = `import React from 'react';\n\nconst ${name} = () => {\n  return (\n    <div>\n      <h2>${name}</h2>\n    </div>\n  );\n};\n\nexport default ${name};\n`;
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, content);
  }
});
