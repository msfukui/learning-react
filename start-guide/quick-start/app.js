function MyButton() {
  function handleClick() {
    alert("You clicked me!");
  }
  return <button onClick={handleClick}>Click me</button>;
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

function AdminPanel() {
  return (
    <div>
      <h1>Admin Panel</h1>
      <p>Only admins can see this.</p>
    </div>
  );
}

function LoginForm() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function MyList() {
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];
  const listItems = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));
  return <ul>{listItems}</ul>;
}

export default function MyApp() {
  let content;
  let isLoggedIn = true;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage />
      <Profile />
      <div>{content}</div>
      <div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>
      <div>{isLoggedIn && <AdminPanel />}</div>
      <MyList />
    </div>
  );
}
