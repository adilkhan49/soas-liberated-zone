import {useParams} from 'react-router-dom';
import Editor from '../components/createPost';
import StatementDetail from '../components/StatementDetail';
function Statement () {

    const params = useParams()

    return (
        
        <div>
            <StatementDetail id={params.id}></StatementDetail>
        </div>
    )
}

export default Statement

            
