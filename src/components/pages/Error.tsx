import type React from "react"
import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../context";



const Error: React.FC = () => {
  const authContext = useContext(AuthContext);
  const isAuth = authContext ? authContext.isAuth : false;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link to={isAuth ? "/posts" : "/login"} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        Go Home
      </Link>
    </div>
  )
}

export default Error