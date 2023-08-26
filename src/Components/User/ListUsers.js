import { useState } from 'react';

// import { User } from '../../Models/User/UserModel';

export const ListUsers = ({usersList}) => {
    const [displayhtmlForm, updateShowhtmlForm] = useState(false);
    const sethtmlFormDisplay = (show) => {
        updateShowhtmlForm(show);
    }

    const addUser = (user) => {
        usersList.push(user);
    }

    return (
        <div className="list-users">
            <button className="btn__add-user" 
                style={{ visibility: displayhtmlForm !== true ? 'visible' : 'hidden' }}
                onClick={() => sethtmlFormDisplay(true)}>
                    Add User [+]
            </button>
            <hr />
            <div className="add-user"
                style={{ visibility: displayhtmlForm === true ? 'visible' : 'hidden' }}>

                <label htmlFor="add-user__fn">First Name:</label>
                <input id="add-user__fn" />
                <br />
        
                <label htmlFor="add-user__ln">Last Name:</label>
                <input id="add-user__ln" />
                <br />
        
                <label htmlFor="add-user__un">Username:</label>
                <input id="add-user__un" />
                <br />

                
                <button 
                    className="btn__add-user__submit"
                    onClick={() => addUser()}>
                    Submit
                </button>

                <button 
                    className="btn__add-user__cancel" 
                    onClick={() => sethtmlFormDisplay(false)}>
                        Cancel
                </button>

            </div>
        </div>
    )
}

export default ListUsers;
