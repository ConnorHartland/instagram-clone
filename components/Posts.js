import Post from "./Post";

const posts = [
  {
    id: "12",
    username: "connor.hartland",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON",
  },
  {
    id: "123",
    username: "connor.hartland",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON",
  },
  {
    id: "1234",
    username: "connor.hartland",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
