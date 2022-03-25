import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../common/Preloader/Preloader";

function Profile(props) {
  if (!props.profile) return <Preloader />;

  return (
    <div>
      <ProfileInfo {...props} profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
