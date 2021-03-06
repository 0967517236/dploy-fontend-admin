import { all } from 'redux-saga/effects';
import watchCategorySagaGetdata from './categorySaga';
import watchFoodSagaGetdata from './foodSaga';
import watchUserSagaGetData from './userSaga';
import watchInvoiceSagaGetData from './invoiceSaga'
import watchsagaitem from './loginSaga';
import watchSagasignup from './forgotPassSaga';
import watchMenuSagaGetdata from './menuSaga';


function* rootSaga() {
    yield all([
        watchFoodSagaGetdata(),
        watchCategorySagaGetdata(),
        watchUserSagaGetData(),
        watchInvoiceSagaGetData(),
        watchsagaitem(),
        watchSagasignup(),
        watchMenuSagaGetdata()
    ]
    )
};
export default rootSaga;
