import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatus } from "../redux/ui/request/requestSlice.js";

export const useRequest = (thunk, ...params) => {
    const [request, setRequest] = useState();

    const dispatch = useDispatch();

    const requestStatus = useSelector((state) => {
        return selectRequestStatus(state, request?.requestId);
    });

    useEffect(() => {
        const dispatchedRequest = dispatch(thunk(...params));

        setRequest(dispatchedRequest);

        return () => {
            dispatchedRequest.abort();
            setRequest(null);
        };
    }, [dispatch, ...params, thunk]);

    return requestStatus;
};