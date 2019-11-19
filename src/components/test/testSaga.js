import { takeLatest, call, put, takeEvery } from "@redux-saga/core/effects";
import { getSomeData } from "./testApi";

function* someGeneratorFun() {
    let response = yield call(getSomeData, "someInput")
    yield put({type: "restActionSuccess", response: response.data })
}

export default [
    takeEvery('restAction', someGeneratorFun)
]