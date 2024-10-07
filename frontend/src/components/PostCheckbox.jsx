import {useState} from 'react';
import { POSTS_API_URL } from '../constants';

function Checkbox({pk, title, author, body, is_approved }) {
    // state
    const [checked, setChecked] = useState(is_approved);
    console.log(pk,checked);
    const changeApproval = async () => {

      try {
        const response = await fetch(POSTS_API_URL+pk, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
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
      <div class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <input type="checkbox" checked={checked} onChange={handleOnChange} />
      </div>
    );
  };

  export default Checkbox