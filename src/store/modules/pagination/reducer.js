import produce from 'immer';

const INITIAL_STATE = {
    pagina: 1,
    offset:0,
};

export default function pagination(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {

            case '@pagination/PAGINATION': {
                draft.offset = action.payload.offset;
                draft.pagina = action.payload.page;
                break;
            }
            case '@pagination/PAGINATION_RESET': {
                draft.offset = 0;
                draft.pagina = 1;
                break;
            }
            default:
        }
    });
}