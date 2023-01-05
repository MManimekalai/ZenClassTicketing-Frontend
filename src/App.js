import "./App.css";
import "./css/sb-admin-2.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Admin_portal from "./admin/Admin_portal";
import Mentor_list from "./admin/Mentor_list";
import Students_list from "./admin/Students_list";
import Student_portal from "./students/Student_portal";
import Mentor_create from "./admin/Mentor_create";
import Student_create from "./admin/Student_create";
import Mentor_portal from "./mentor/Mentor_portal";
import Query_Studentlist from "./students/Query_Studentlist";
import Query_view from "./students/Query_view";
import Query_create from "./students/Query_create";
import Query_Adminlist from "./admin/Query_Adminlist";
import Query_Adminview from "./admin/Query_Adminview";
import Query_AdminEdit from "./admin/Query_AdminEdit";
import Query_mentorlist from "./mentor/Query_mentorlist";
import Query_mentorView from "./mentor/Query_mentorView";
import Query_reolve from "./mentor/Query_reolve";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/admin_portal" element={<Admin_portal/>}>
          <Route path="mentors/list" element={<Mentor_list/>}/>
          <Route path="mentors/add" element={<Mentor_create/>}/>
          <Route path="students/list" element={<Students_list/>}/>
          <Route path="students/add" element={<Student_create/>}/>
          <Route path="query/all_list" element={<Query_Adminlist/>}/>
          <Route path="query/one_list/:qId" element={<Query_Adminview/>}/>
          <Route path="query/assign_mentor/:qId" element={<Query_AdminEdit/>}/>
        </Route>
        <Route path="/student_portal" element={<Student_portal/>}>
          <Route path="all_query/list/:sId" element={<Query_Studentlist/>}/>
          <Route path="view_query/list/:sId/:_id" element={<Query_view/>}/>
          <Route path="create_query/:sId" element={<Query_create/>}/>
        </Route>
        <Route path="/mentor_portal" element={<Mentor_portal/>}>
          <Route path="all_query/mentor/list/:mId" element={<Query_mentorlist/>}/>
          <Route path="one_query/mentor/list/:mId/:qId" element={<Query_mentorView/>}/>
          <Route path="resolve_query/:mId/:qId" element={<Query_reolve/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
