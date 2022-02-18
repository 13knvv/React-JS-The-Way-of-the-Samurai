import MyPost from './MyPost/MyPost'
import c from './MyPosts.module.css'

function MyPosts(props) {
    return (
        <div className={c.MyPosts}>
            <textarea></textarea>
            <button type="submit">Add post</button>
             <MyPost fullName='Mike Knyazev' massege='lylylylyl'/>
             <MyPost fullName='Mike Knyazev' massege='lylylylyl'/> 
             <MyPost fullName='Mike Knyazev' massege='lylyffffffffffffff ffffffffffffffffffffffff fffffffffffffffffffffffffffff fffffffffffffffffffffffff fffffffffffffffffffffffffffffffffffffff fffffffffffffffffffff ffffffffffffffff fffffffffffffff ffffffffff lylyl lorem fgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg'/> 
             <MyPost fullName='Mike Knyazev' massege='lylylylyl'/> 

        </div>
    )
}

export default MyPosts
