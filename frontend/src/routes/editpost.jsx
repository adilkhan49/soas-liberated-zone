import {useParams} from 'react-router-dom';
import Editor from '../components/markdownedit';

function EditPost () {

    const params = useParams()

    return (
        
        <div>
            <Editor id={params.id}></Editor>
        </div>
    )
}

export default EditPost

            
