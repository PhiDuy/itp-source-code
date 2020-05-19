/**
 * @file reducer
 */

// Using to control stage

import freeze from "deep-freeze";
import { handleActions } from "redux-actions";
import * as actions from "./actions";

export const name = "Guest_UnitsPage";

const initialState = freeze({
  toggleMemberDetail: false,
  isGettingStructure: false,
  isGettingIntroduce: false,
  activedTab: "1",
  curStructure: {},
  curMember: {},
  introduce: {},
  terms: [],
  memTypeOne: [],
  memTypeTwo: [],
  memTypeThree: [],
  memTypeFour: []
});

export default handleActions(
  {
    [actions.toggleModal]: (state, action) => {
      if (action.payload === "closeMemberDetail") {
        document.body.style.overflow = "auto";
        return freeze({
          ...state,
          toggleMemberDetail: false
        });
      }
      if (action.payload === "openMemberDetail") {
        document.body.style.overflow = "hidden";
        return freeze({
          ...state,
          toggleMemberDetail: true
        });
      } else {
        return freeze({
          ...state
        });
      }
    },
    /*---
    ----- Handle Clear
    */
    [actions.handleClear]: (state, action) => {
      return freeze({
        ...state,
        activedTab: "1",
        curStructure: {},
        curMember: {},
        introduce: {},
        terms: [],
        memTypeOne: [],
        memTypeTwo: [],
        memTypeThree: [],
        toggleMemberDetail: false,
        isGettingStructure: false,
        isGettingIntroduce: false
      });
    },
    /*---
    ----- Handle Member Detail
    */
    [actions.handleMemberDetail]: (state, action) => {
      return freeze({
        ...state,
        curMember: action.payload
      });
    },
    /*---
    ----- Handle Tab Change
    */
    [actions.handleTabChange]: (state, action) => {
      if (action.payload === "1") {
        return freeze({
          ...state,
          activedTab: action.payload,
          curStructure: {}
        });
      }
      return freeze({
        ...state,
        activedTab: action.payload
      });
    },
    /*---
    ----- Get Introduce OfUnit
    */
    [actions.getIntroduce]: (state, action) => {
      return freeze({
        ...state,
        isGettingIntroduce: true
      });
    },
    [actions.getIntroduceSuccess]: (state, action) => {
      if (action.payload !== null) {
        return freeze({
          ...state,
          introduce: action.payload,
          isGettingIntroduce: false
        });
      } else {
        return freeze({
          ...state,
          introduce: {},
          isGettingIntroduce: false
        });
      }
    },
    [actions.getIntroduceFail]: (state, action) => {
      return freeze({
        ...state,
        isGettingIntroduce: false
      });
    },
    /*---
    ----- Get All Terms Of Unit
    */
    [actions.getAllTermsOfUnitSuccess]: (state, action) => {
      return freeze({
        ...state,
        terms: action.payload
      });
    },
    /*---
    ----- Get Structure By Term
    */
    [actions.getStructureByTerm]: (state, action) => {
      return freeze({
        ...state,
        isGettingStructure: true
      });
    },
    [actions.getStructureByTermSuccess]: (state, action) => {
      if (action.payload !== null) {
        let curStructure = action.payload;
        let members = curStructure.members;
        let memTypeOne = [];
        let memTypeTwo = [];
        let memTypeThree = [];
        let memTypeFour = [];
        members.map(item => {
          if (item.role === "1") {
            memTypeOne.push(item);
          } else if (item.role === "2") {
            memTypeTwo.push(item);
          } else if (item.role === "3") {
            memTypeThree.push(item);
          } else {
            memTypeFour.push(item);
          }
        });

        return freeze({
          ...state,
          isGettingStructure: false,
          curStructure: action.payload,
          memTypeOne,
          memTypeTwo,
          memTypeThree,
          memTypeFour
        });
      } else {
        return freeze({
          ...state,
          isGettingStructure: false,
          curMember: {},
          memTypeOne: [],
          memTypeTwo: [],
          memTypeThree: [],
          memTypeFour: []
        });
      }
    },
    [actions.getStructureByTermFail]: (state, action) => {
      return freeze({
        ...state,
        isGettingStructure: false
      });
    }
  },
  initialState
);
