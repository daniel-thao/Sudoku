document.querySelector("#createAcc").addEventListener("submit", (e) => {
  e.preventDefault();
  createUser(e.target[0].value, e.target[1].value, e.target[2].value);
});

const createUser = async (username, email, password) => {
  const newUser = await axios.post("api/user/create", {username, email, password});
  console.log(newUser.data);

  //   await axios.post("api/user/create", { username, email, password });

  return (location.href = "/");
};
