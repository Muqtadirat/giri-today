import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';

import { AppDispatch } from './store';

export const handleSaveWithDelay =
  (
    saveAction: ActionCreatorWithoutPayload,
    resetAction: ActionCreatorWithoutPayload,
  ) =>
  (dispatch: AppDispatch) => {
    dispatch(saveAction());
    setTimeout(() => dispatch(resetAction()), 500);
  };
