import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const OrgSettings = () => {
    const navigate = useNavigate();
    const {org_id} = useParams()
    const [members, setMembers] = useState();

    useEffect(() => {
        axios.get(`/api/organization/member/${org_id}/`)
        .then(res=> {
            setMembers(res.data)
        })
    },[org_id])

    const removeMember = (member_id) => {
        axios.delete(`/api/organization/member-remove/${member_id}/`)
        .then(res=> {
            const updated_members = members.filter(member => member.id !== member_id);
            setMembers(updated_members)
        })
    }

    const deleteOrg = () => {
        console.log('hello')
        axios.delete(`/api/organization/delete/${org_id}/`)
        .then(res=> {
            navigate("/app")
            window.location.reload(true);
        })
    }
    

  return (
    <div className="w-full relative flex flex-col items-center justify-center">
        <div className="w-full p-6 bg-white rounded-md shadow-lg border-top min-h-screen">
            <div className="overflow-x-auto">
                <div className="mb-5">
                    <h1 className="text-2xl font-bold mb-5">Added Members In Organization</h1>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>User Name</th>
                            <th>User Role</th>
                            <th>Invite</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            members?.map((member, index)=> (
                                <tr key ={index} className="hover">
                                    <th>{index}</th>
                                    <td>{member.email}</td>
                                    <td>{member.role}</td>
                                    {
                                        member.is_company ? <td>Accepted</td> : <td>Pending</td>
                                    }
                                    <td><button onClick={()=> {removeMember(member.id)}} className="btn btn-sm text-blue-800">Remove</button></td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                    {
                        !members && <h1 className="text-2xl font-semibold text-gray-500 m-5 text-center">NO MEMBERS ADDED IN YOUR ORGANIZATIONS</h1>
                    }
                </div>
                <div className="mt-5">
                    <h1 className="text-2xl font-bold mb-5">Delete Your Organizations</h1>
                    <button className="btn btn-outline btn-error" onClick={()=>document.getElementById('my_modal_1').showModal()}>Delete Your Organization</button>
                    <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Are you sure you want to delete your organization.</h3>
                        <p className="py-4">You will lose all of your data, which can not be retrievable.</p>
                        <div className="modal-action">
                        <button onClick={()=> {deleteOrg()}} className="btn btn-outline btn-error">Yes I want to delete</button>
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn " >Cancel</button>
                        </form>
                        </div>
                    </div>
                    </dialog>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrgSettings