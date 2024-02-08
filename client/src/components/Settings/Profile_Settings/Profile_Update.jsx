import { useState } from "react"


const Profile_Update = () => {
  const [firstName, setFirstName] = useState('');
  
  return (
  <>
  <div>
  <div className="max-w-md border p-3 rounded-lg justify-center  text-lg text-center">
               <div className="text-3xl font-semibold">Profile Settings</div>
               <div>Name: {firstName !=='' && <h1>{firstName}</h1>}</div>
               <div>
                <input className="border rounded-lg"
                type="text"
                placeholder="Type here.."
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                 />
                
               </div>
                <button className="border rounded-lg p-1 text-lg bg-primary text-white">Save</button>
            </div>
  </div>
    </>
  )
}

export default Profile_Update