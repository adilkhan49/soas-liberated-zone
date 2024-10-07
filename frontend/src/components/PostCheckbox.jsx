import {useState, useContext} from 'react';
import AuthContext from '../context/AuthContext';
import { POSTS_API_URL } from '../constants';

function Checkbox({pk, title, author, body, is_approved }) {
    // state
    const [checked, setChecked] = useState(is_approved);
    let { authTokens } = useContext(AuthContext)

    console.log(pk,checked);
    const changeApproval = async () => {

      try {
        const response = await fetch(POSTS_API_URL+pk, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authTokens.access,
          },
          body: JSON.stringify({
            title: title,
            author: author,
            body: body,
            is_approved: !checked
          }),
        });
  
        if (response.ok) {
          if (!checked) {
            alert("Approved")
          } else {
            alert("Unapproved")
          }

        } else {
          alert('Error changing approval state');
        }
      } catch (error) {
        console.error('Error changing approval state:', error);
        alert('Error changing approval state.');
      }
    };
    const handleOnChange = () => {
        console.log(pk)
        changeApproval();
        setChecked(!checked);
      };
    

    return (
      <div class="w-4 h-4">
        <input type="checkbox" checked={checked} onChange={handleOnChange} />
      </div>
    );
  };

  export default Checkbox