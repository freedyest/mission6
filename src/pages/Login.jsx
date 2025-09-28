import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import eyesOff from "../assets/eyesoff.png";
import eyesOn from "../assets/eyeson.png";
import NavButton from "../components/NavButton.jsx";
function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/Home");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/Register");
  };

  const togglePassword = () => {
    const input = document.getElementById("password");
    const icon = document.getElementById("iconPassword");

    if (input.type === "password") {
      input.type = "text";
      icon.src = eyesOn; // ✅ pakai import
    } else {
      input.type = "password";
      icon.src = eyesOff; // ✅ pakai import
    }
  };

  return (
    <div className="bg-[#FFFDF3]">
      {/* <header></header> */}
      <Header> </Header>
      <section
        id="loginform"
        className="min-h-screen flex items-center justify-center py-32 md:py-36"
      >
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 text-center w-4/5 md:w-1/2">
          <h1 className="text-3xl font-bold">Masukkan Akun</h1>
          <h2 className="text-[#333333AD] text-lg">
            Yuk, lanjutin belajarmu di videobelajar.
          </h2>

          <div className="mt-8">
            {/* Email */}
            <div className="mb-5 text-start">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            {/* Password */}
            <div className="mb-5 text-start">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Kata Sandi <span className="text-red-600">*</span>
              </label>
              <div className="flex justify-between w-full border border-gray-300 rounded-md shadow-sm">
                <input
                  type="password"
                  id="password"
                  className="flex-1 px-3 py-2 focus:outline-none rounded-l-md"
                />
                <button type="button" onClick={togglePassword} className="px-3">
                  <img
                    id="iconPassword"
                    src={eyesOff} // ✅ default icon
                    alt="toggle password"
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>

            <div className="mb-5 text-end">
              <a href="#" className="text-darkgray hover:underline text-md">
                Lupa password?
              </a>
            </div>

            {/* button */}
            <div>
              <NavButton
                onClick={handleLogin}
                variant="primary"
                className="mb-8"
              >
                Masuk
              </NavButton>
            </div>

            <div>
              <NavButton
                onClick={handleRegister}
                variant="secondary"
                className="mb-6"
              >
                Register
              </NavButton>
            </div>

            {/* Atau */}
            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="px-3 text-gray-500 text-sm">atau</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <button className="flex justify-center items-center w-full font-bold bg-white text-darkgray py-2 px-4 rounded-md hover:bg-slate-400 border border-darkgray">
              <img
                src={`${import.meta.env.BASE_URL}google.png`}
                alt="Google"
                className="h-10 w-10 mr-2"
              />
              <span>Masuk dengan Google</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
