import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatus } from "../redux/ui/request/requestSlice.js";
import { RequestStatuses } from "../helpers/requestStatuses.js";

export const useRequest = (thunk, ...params) => {
    const [request, setRequest] = useState();
    const selectorStatus = useSelector((state) => {
        return selectRequestStatus(state, request?.requestId);
    })
    const [status, setStatus] = useState(selectorStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        setStatus(selectorStatus);
    }, [selectorStatus]);

    //Лайфхак, когда запрос не нужен, то он остается idle, а данные уже есть
    //Промис уже есть - смотрим у него статус - и ставим fulfilled
    useEffect(() => {
        const t = {};
        Promise.race([request, t])
            .then(v => (v === t) ? RequestStatuses.PENDING : RequestStatuses.FULFILLED, () => RequestStatuses.REJECTED).then((value) => {
            if (request && value === RequestStatuses.FULFILLED && selectorStatus === RequestStatuses.IDLE) {
                setStatus(RequestStatuses.FULFILLED);
            }
        });
    }, [selectorStatus, request]);

    useEffect(() => {
        const dispatchedRequest = dispatch(thunk(...params));
        setRequest(dispatchedRequest);
        return () => {
            dispatchedRequest.abort();
            setRequest(null);
        };
    }, [dispatch, ...params, thunk]);

    const isLoading = () => {
        return status === RequestStatuses.IDLE || status === RequestStatuses.PENDING;
    };

    const isError = () => {
        return status === RequestStatuses.REJECTED;
    };

    const isSuccess = () => {
        return status === RequestStatuses.FULFILLED;
    };

    return [isLoading, isError, isSuccess];
};