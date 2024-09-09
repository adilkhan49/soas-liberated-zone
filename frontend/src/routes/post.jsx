import {useParams} from 'react-router-dom';
import Editor from '../components/markdowncreate';
import PostDetail from '../components/PostDetail';
function Post () {

    const params = useParams()

    return (
        
        <div>
            <PostDetail id={params.id}></PostDetail>
        </div>
    )
}

export default Post

            
