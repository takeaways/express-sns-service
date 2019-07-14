import {Card, Avatar} from 'antd';

const Profile = () => {
  const dummy = {
    isLoggedIn:false,
    nickname:"DevJang",
    Post:[],
    Followers:[],
    Followings:[],
  }
  return (
    <Card
      actions={[
        <div key="twit">팔로<br/>{dummy.Post.length}</div>,
        <div key="following">Followers<br/>{dummy.Followers.length}</div>,
        <div key="follower">Followings<br/>{dummy.Followings.length}</div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
        title={dummy.nickname}
      />
    </Card>
  )
}

export default Profile;
