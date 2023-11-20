import { createStore} from "redux";

import calculate from "./reducer";

export let store = createStore(calculate);