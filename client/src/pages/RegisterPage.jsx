import { Link } from "react-router-dom";

export default function RegisterPage() {
    return(
        <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="mx-auto max-w-md mt-2">
        <input type="text" placeholder="Gourav Singla" />
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
          <button className="primary">Register</button>
          <div className="text-center py=2 text-gray-500">
            Already a member ? <Link className="underline text-black" to={'/login'}>Login</Link>
          </div>
        </form>
      </div>
    </div>
    )
}
