import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

export const withRouter = (component) => () =>
(
  <Router >
    <Suspense fallback="Loading...">{component()}</Suspense>
  </Router>
);
