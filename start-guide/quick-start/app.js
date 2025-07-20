function MyButton() {
  return <button>I'm a button</button>;
}

function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <p>
        Hello there.
        <br />
        How do you do?
      </p>
    </>
  );
}

function Profile() {
  const user = {
    name: "Masayuki Fukui",
    imageUrl: "./msfukui.jpg",
    imageSize: 100,
  };

  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage />
      <Profile />
    </div>
  );
}
