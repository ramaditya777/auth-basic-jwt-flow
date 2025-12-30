const About = () => {
  return (
    <div className="max-w-3xl mx-auto mt-16 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">About AuthApp</h1>

      <p className="text-gray-600 leading-relaxed mb-4">
        AuthApp is a simple authentication-based application built using the
        MERN stack. It demonstrates how user signup, login, and protected routes
        work using JSON Web Tokens (JWT).
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        The goal of this project is to understand real-world authentication
        flows such as secure login, route protection, and session handling in
        modern web applications.
      </p>

      <p className="text-gray-600 leading-relaxed">
        This app is built for learning purposes and focuses on clean structure,
        best practices, and scalable authentication logic.
      </p>
    </div>
  );
};

export default About;
