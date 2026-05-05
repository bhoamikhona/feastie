export const login = async (req, res) => {
  console.log("login");
};

export const register = async (req, res) => {
  console.log("register");
};

export const getUserProfile = async (req, res) => {
  console.log("getUserProfile");
};

export const updateUserProfile = async (req, res) => {
  console.log("updateUserProfile");
  res.json(req.user);
};
