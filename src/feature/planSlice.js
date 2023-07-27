import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    plan: null,
    addOns: [],
    finishPlan:[]
}
const planSlice = createSlice({
    name: 'planSlice',
    initialState,
    reducers: {
        addPlan: (state, {payload}) => {
            state.plan = payload.plan
        },
        addAddOns: (state, {payload}) => {
            state.addOns = payload.addOns
        },
        updatePlan: (state, {payload}) => {
            state.plan = payload.plan
        },
        updateAddOns: (state, {payload}) => {
            state.addOns = payload.addOns
        }
    }
})

export const {addPlan,updatePlan, addAddOns, updateAddOns} = planSlice.actions
export default planSlice.reducer