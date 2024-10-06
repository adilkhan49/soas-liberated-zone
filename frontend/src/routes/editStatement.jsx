import {useParams} from 'react-router-dom';
import Editor from '../components/editStatement';

function EditStatement () {

    const params = useParams()

    return (
        
        <div>
            <Editor id={params.id}></Editor>
        </div>
    )
}

export default EditStatement

            
