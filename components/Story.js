function Story({ image, username }) {
  return (
    <div>
      <img
        className="h-14 w-14 p-[1.5px] border-2 border-red-500 object-contain rounded-full cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
        src={image}
        alt="profile image"
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default Story;
