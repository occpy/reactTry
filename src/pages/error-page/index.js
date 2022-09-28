import { useRouteError } from "react-router-dom";

/**
 * 错误页面
 * @returns {JSX.Element}
 * @constructor
 */
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>出现错误了!</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}