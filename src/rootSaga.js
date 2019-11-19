import { all } from "@redux-saga/core/effects";
import testSaga from "./components/test/testSaga";

export default function* someSagaRootGeneratorFunc(){
    yield all([...testSaga])
}