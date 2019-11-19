import { combineReducers } from "redux";
import testReducer from "./components/test/testReducer"

export default combineReducers({
    testData: testReducer
})