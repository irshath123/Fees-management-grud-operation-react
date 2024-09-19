import React, {useState} from 'react';
import './Feest.css';

const CredoFee =()=> {

    const [students,setStudents]=useState([]);
    const [student,setStudent]=useState({
        name:"",
        course:"",
        fees:"",
        pendingfees:"",
    });
    const [isediting,setIsediting]=useState(false);
    const [currentstudentindex,setCurrentstudentindex]=useState(null);

    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setStudent({...student,[name]:value})
    };
    const AddStudent = ()=>{
        setStudents([...students,student]);
        setStudent({name:"",course:"",fees:"",pendingfees:""});
    };
    const editStudent=(index) =>{
        setStudent(students[index]);
        setIsediting(true);
        setCurrentstudentindex(index);
    };
    const updateStudent =()=>{
        const updatedStudents=
        students.map((s,index)=>index === currentstudentindex ? student :s );
        setStudents(updatedStudents);
        setStudents(updatedStudents);
        setStudent({name:'',
            course:'',
            fees:'',
            pendingfees:''
        });
        setIsediting(false);
        setCurrentstudentindex(null);
    };
    const removeStudent =(index)=>{
        const updatedStudents=students.filter((_,i)=>i!==index);
        setStudents(updatedStudents);
    };


    return(
        <body>
        <div className='con'>
            <h1>Credo Fees Management System</h1>
            <div className='con2'>
                <input type='text' name='name' placeholder='Enter the Student Name' value={student.name} onChange={handleInputChange}/>
                <input type='text' name='course' placeholder='Enter the course' value={student.course} onChange={handleInputChange}/>
                <input type='text' name='fees' placeholder='Enter the fees' value={student.fees} onChange={handleInputChange}/>
                <input type='text' name='pendingfees'placeholder='Enter the pendingfees' value={student.pendingfees} onChange={handleInputChange}/>
                {isediting ?(
                    <button onClick={updateStudent}>Update</button>
                ):(
                    <button onClick={AddStudent}>Add</button>
                )}
            </div>
           
            <div className='con3'>
                <h2>Students List</h2>
                <br/>
                <table border={1} cellPadding={22} cellSpacing={5} >
                    <thead>
                        <tr >
                            <th className='bt'>Name</th>
                            <th className='bt'>Course</th>
                            <th className='bt'>Fees</th>
                            <th className='bt'>PendingFees</th>
                            <th className='bt'>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {students.map((student,index) => (
                            <tr key={index} >
                                <td className='bt'>{student.name}</td>
                                <td className='bt'>{student.course}</td>
                                <td className='bt'>{student.fees}</td>
                                <td className='bt'>{student.pendingfees}</td>
                                <button onClick={()=>editStudent(index)}>Edit</button>
                                <button className='re' onClick={()=>removeStudent(index)}>Remove</button>
                            </tr>
                            )      
                        )}
                        </tbody>

                    
                </table>
            </div>
        </div>
        </body>
    )


}
export default CredoFee