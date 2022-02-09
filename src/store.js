import {createStore} from 'vuex';

export const store = createStore({
    state () {
        return {
            scrollPosY: 0,
        }
    },
    getters: {
        scrollPosY (state) {
            return state.scrollPosY;
        }
    },
    mutations: {
        setScrollPosY (state, y) {
            state.scrollPosY = y;
        }
    }
});