const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Home</h1>

        {/* Welcome Card */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-lg font-medium mb-2">Welcome 👋</h2>
          <p className="text-gray-600">
            This is a simple authentication-based application built using React
            and Tailwind CSS.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-medium mb-2">Authentication</h3>
            <p className="text-sm text-gray-600">
              Signup and login flows using modern UI and best practices.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-medium mb-2">Authorization</h3>
            <p className="text-sm text-gray-600">
              Role-based access will be added step by step.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-medium mb-2">Security</h3>
            <p className="text-sm text-gray-600">
              JWT, refresh tokens, and protected routes (coming soon).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
