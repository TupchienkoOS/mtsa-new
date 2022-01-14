import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Spinner } from "../../shared/ui/spinner";

export const withRouter = (component) => () =>
(
  <Router >
    <Suspense fallback={<Spinner />}>{component()}</Suspense>
  </Router>
);
