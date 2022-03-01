interface IRootState {
    num: number,
    coder: any[]
}
interface payloadType {
    num: number
}
const state = {
    coder: [
        { name: '前端人员', number: 5 },
        { name: '后端人员', number: 13 },
        { name: '测试人员', number: 2 },
        { name: '产品经理', number: 1 },
    ],
    num: 1
}

const mutations = {
    INCREMENT(state: IRootState, payload: payloadType) {
        console.log('根store中的方法');
        state.num += payload.num
        console.log(state.num);
    }
}
const actions = {
    increment({ commit }, payload: payloadType) {
        commit('INCREMENT', payload)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}