import { useRouteError } from "react-router-dom";
function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div
      id="error-page"
      className="flex flex-col text-gray-400 p-4 text-center gap-4"
    >
      <h1 className="font-extrabold text-gray-600 text-2xl">Oops!</h1>
      <div className="flex gap-2 flex-col justify-center items-center text-xl">
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-red-500">
          <i>{error.data || error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
export default ErrorPage;
