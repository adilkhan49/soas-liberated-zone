import {useState, useContext} from 'react';
import AuthContext from '../context/AuthContext';
import { POSTS_API_URL } from '../constants';

function Checkbox({post}) {
    // state
    const [checked, setChecked] = useState(post.is_approved);
    let { authTokens } = useContext(AuthContext)

    const changeApproval = async () => {

      try {
        const response = await fetch(POSTS_API_URL+post.pk, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authTokens.access,
          },
          body: JSON.stringify({
            title: post.title,
            author: post.author,
            body: post.body,
            release_date: post.release_date,
            is_approved: !post.checked
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
        changeApproval();
        setChecked(!checked);
      };
    

    return (
      <div class="w-4 h-4 accent-black">
        <input type="checkbox" checked={checked} onChange={handleOnChange} />
      </div>
    );
  };

  export default Checkbox