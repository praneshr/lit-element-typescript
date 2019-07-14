import page from "page";

import { routerAction } from "./actions/actions";
import store from "./store";

export default () => {
  page("/", ctx => {
    store.dispatch(routerAction({ pageId: "default", ...ctx }));
  });

  page("/path2", ctx => {
    store.dispatch(routerAction({ pageId: "hi", ...ctx }));
  });

  page();
};
