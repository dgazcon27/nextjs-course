const UserProfilePage = (props) => {
  return <h1>{props.username}</h1>;
};

export async function getServerSideProps(context) {
  const { params: {uid} } = context
  return {
    props: {
      username: "MAX is id: "+uid,
    },
  };
}

export default UserProfilePage;
